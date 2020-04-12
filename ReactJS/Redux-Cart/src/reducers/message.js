import * as types from '../constants/ActionTypes';
import * as Message from '../constants/Message';
var initialStatte = Message.MSG_WELCOME;

const message = (state = initialStatte, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            state = action.message;
            return state;
        default:
            return state;
    };
}

export default message;