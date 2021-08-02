export const PAUSE = "PAUSE";
export const RESUME = "RESUME";
export const FINISH_GAME = "FINISH_GAME";
export const MOVE_UP = "MOVE_UP";
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_DOWN = "MOVE_DOWN";
export const MOVE_LEFT = "MOVE_LEFT";
export const RESTART = "RESTART";

export const pause = () => {
    return { type: PAUSE };
};

export const resume = () => {
    return { type: RESUME };
};

export const finishGame = () => {
    return { type: FINISH_GAME }
}

export const moveUp = () => {
    return { type: MOVE_UP };
};

export const moveRight = () => {
    return { type: MOVE_RIGHT };
};

export const moveDown = () => {
    return { type: MOVE_DOWN };
};

export const moveLeft = () => {
    return { type: MOVE_LEFT };
};

export const restart = () => {
    return { type: RESTART };
};
