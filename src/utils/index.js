import generateMaze from "generate-maze";

export const defaultState = () => {
    // const points = generatePointPositions(10);
    return {
        x: 1,
        y: 1,
        gameFinished: false,
        isRunning: true,
        score: 0,
        maze: generateMaze(20, 20, true, getRandomInt(0, 10000)),
        pointPositions: [],
    };
};

export const canMove = (x, y, maze, dir) => {
    switch(dir){
        case "top":
            return y > 1 && !maze[y-1][x-1].top;
        case "right":
            return x < 20 && !maze[y-1][x-1].right;
        case "bottom":
            return y < 20 && !maze[y-1][x-1].bottom;
        case "left":
            return x > 1 && !maze[y-1][x-1].left;
    }
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const generatePointPositions = (n) => {
    const res = new Array(n);
    let num;
    for (let i = 0; i < n; i++) {
        do {
            num = [getRandomInt(1,20), getRandomInt(1,20)]
        } while(num !== [1,1]);
        res.push(num);
    }
    return res;
}
