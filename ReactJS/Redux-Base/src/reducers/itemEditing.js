import * as types from '../constants/ActionTypes';

var initialState = {
    id:"",
    name:"",
    status: false
};

var myReducer = (state = initialState, action) => {
    let task = {};
    switch(action.type) {
        case types.EDIT_TASK: 
            task = {...action.task}
            return task;
        default: return state;
    }
}

export default myReducer;