import { 
    PAUSE, 
    RESUME, 
    RESTART, 
    MOVE_UP, 
    MOVE_RIGHT, 
    MOVE_DOWN, 
    MOVE_LEFT 
} from "../actions";
import { canMoveTo, defaultState } from "../utils";

const gameReducer = (state = defaultState(), action) => {
    const { pos, gameOver, isRunning, score } = state;
    const { x, y } = pos;

    switch(action.type) {
        case PAUSE:
            return { ...state, isRunning: false };
        case RESUME:
            return { ...state, isRunning: true };
        case RESTART:
            return state;
        case MOVE_UP:
            if (canMoveTo(x,y-1)) 
                return { ...state, y: y-1 };
        case MOVE_RIGHT:
            if (canMoveTo(x+1,y))
                return { ...state, x: x+1 };
        case MOVE_DOWN:
            if (canMoveTo(x,y+1))
                return { ...state, y: y+1 };
        case MOVE_LEFT:
            if (canMoveTo(x-1,y))
                return { ...state, x: x-1 };
        default: 
            return state;
    }
};

export default gameReducer;