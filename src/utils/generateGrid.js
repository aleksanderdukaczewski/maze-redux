const UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3;

function generateGrid(rows, cols) {
    const grid = new Array(rows);
    const cells = rows * cols;
    const pos = {x: 0, y: 0}
    const visited = {}
    const stack = [];

    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            grid[i][j] = {upVisited: false, rightVisited: false, downVisited: false, leftVisited: false, leftWall: false, rightWall: false};
            const key = i + "," + j;
            visited[key] = false;
        }
    }

    console.log(grid)

    let steps = 0;
    const unvisitedNeigbours = (col, row) => {
        let res = 0;
        if (col >= 0 && col < cols && row >= 0 && row < rows) {
            if (col > 0 && !visited[((col - 1) + "," + row)]) {
                res++;
            } else if (row > 0 && !visited[(col + "," + (row - 1))]) {
                res++;                
            } else if (col + 1 < cols && !visited[((col + 1) + "," + row)]) {
                res++;
            } else if (row + 1 < rows && !visited[col + "," +  (row + 1)]) {
                res++;
            }
        }
        return res;
    };

    while (steps < cells) {
        let dir = -1;
        let key, new_x, new_y;
        visited[(pos.x + "," + pos.y)] = true;

        stack.push([pos.x, pos.y]);
        steps++;
        console.log(stack)
        
        console.log("UNVISITED: " + unvisitedNeigbours(pos.x, cols, pos.y, rows, visited))

        if (unvisitedNeigbours(pos.x, cols, pos.y, rows, visited)) {
            do {
                dir = chooseNextDir();
                switch (dir) {
                    case UP:
                        new_x = pos.x;
                        new_y = pos.y - 1;
                        break;
                    case RIGHT:
                        new_x = pos.x + 1
                        new_y = pos.y;
                    case DOWN:
                        new_x = pos.x;
                        new_y = pos.y + 1
                    case LEFT:
                        new_x = pos.x - 1
                        new_y = pos.y;
                }
                key = (new_x + "," + new_y);
            } while (!visited[key] && x >= 0 && x < cols && y >= 0 && y < rows);
        } else {
            const coords = stack.pop();;
            console.log(coords)
            pos.x = coords[0]; pos.y = coords[1];
        }

        visited[key] = true;
        pos.x = new_x; pos.y = new_y;
    }
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};
const chooseNextDir = () => getRandomInt(0,4);



console.log(generateGrid(3,3));