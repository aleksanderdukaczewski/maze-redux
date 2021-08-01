import { 
    PAUSE, 
    RESUME, 
    RESTART, 
    MOVE_UP, 
    MOVE_RIGHT, 
    MOVE_DOWN, 
    MOVE_LEFT 
} from "../actions";
import { defaultState } from "../utils";

const gameReducer = (state = defaultState(), action) => {
    switch(action.type) {
        case PAUSE:
            return state;
        case RESUME:
            return state;
        case RESTART:
            return state;
        case MOVE_UP:
            return state;
        case MOVE_RIGHT:
            return state;
        case MOVE_DOWN:
            return state;
        case MOVE_LEFT:
            return state;
        default: 
            return state;
    }
};

export default gameReducer;