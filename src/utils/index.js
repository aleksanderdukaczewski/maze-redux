export const defaultState = () => {
    return {
        x: 1,
        y: 1,
        gameOver: false,
        isRunning: true,
        score: 0,
    };
};

export const canMoveTo = (x, y) => (x >= 1 && y >= 1 && x <= 20 && y <= 20);