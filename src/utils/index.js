import generate from "generate-maze";

export const defaultState = () => {
    return {
        x: 1,
        y: 1,
        gameFinished: false,
        isRunning: true,
        score: 0,
        maze: generate(20, 20, true, randomInt(10000)),
    };
};

export const canMoveTo = (x, y) => (x >= 1 && y >= 1 && x <= 20 && y <= 20);

const randomInt = (max) => Math.floor(Math.random() * max);
