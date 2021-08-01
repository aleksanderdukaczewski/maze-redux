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
    const { pos, gameOver, isRunning, score, x, y } = state;

    switch(action.type) {
        case PAUSE:
            return { ...state, isRunning: false };
        case RESUME:
            return { ...state, isRunning: true };
        case RESTART:
            return state;
        case MOVE_UP:
            console.log("moving up");
            if (canMoveTo(x,y-1)) 
                return { ...state, y: y-1 };
            else
                return state;
        case MOVE_RIGHT:
            console.log("moving right");
            if (canMoveTo(x+1,y)) 
                return { ...state, x: x+1 };
            else 
                return state;
        case MOVE_DOWN:
            console.log("Moving down");
            if (canMoveTo(x,y+1))
                return { ...state, y: y+1 };
            else 
                return state;
        case MOVE_LEFT:
            console.log("moving left");
            if (canMoveTo(x-1,y))
                return { ...state, x: x-1 };
            else
                return state;
        default: 
            return state;
    }
};

export default gameReducer;