import { 
    PAUSE, 
    RESUME, 
    FINISH_GAME, 
    MOVE_UP, 
    MOVE_RIGHT, 
    MOVE_DOWN, 
    MOVE_LEFT,
    RESTART, 
} from "../actions";
import { canMoveTo, defaultState } from "../utils";

const gameReducer = (state = defaultState(), action) => {
    const { pos, gameFinished, isRunning, score, x, y } = state;

    switch(action.type) {
        case PAUSE:
            return { ...state, isRunning: false };
        case RESUME:
            return { ...state, isRunning: true };
        case RESTART:
            return defaultState();
        case FINISH_GAME:
            return { ...state, gameFinished: true, isRunning: false };
        case MOVE_UP:
            if (canMoveTo(x,y-1)) 
                return { ...state, y: y-1 };
            else
                return state;
        case MOVE_RIGHT:
            if (canMoveTo(x+1,y)) 
                return { ...state, x: x+1 };
            else 
                return state;
        case MOVE_DOWN:
            if (canMoveTo(x,y+1))
                return { ...state, y: y+1 };
            else 
                return state;
        case MOVE_LEFT:
            if (canMoveTo(x-1,y))
                return { ...state, x: x-1 };
            else
                return state;
        default: 
            return state;
    }
};

export default gameReducer;