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
import { canMove, defaultState } from "../utils";

const gameReducer = (state = defaultState(), action) => {
    const { x, y, gameFinished, isRunning, score, maze } = state;
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
            if (canMove(x,y,maze,"top")) 
                return { ...state, y: y-1 };
            else
                return state;
        case MOVE_RIGHT:
            if (canMove(x,y,maze,"right")) 
                return { ...state, x: x+1 };
            else 
                return state;
        case MOVE_DOWN:
            if (canMove(x,y,maze,"bottom"))
                return { ...state, y: y+1 };
            else 
                return state;
        case MOVE_LEFT:
            if (canMove(x,y,maze,"left"))
                return { ...state, x: x-1 };
            else
                return state;
        default: 
            return state;
    }
};

export default gameReducer;