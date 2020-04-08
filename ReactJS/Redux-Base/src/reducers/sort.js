import * as types from '../constants/ActionTypes';

var initialState = {
    by:"name",
    value: 1
};

var myReducer = (state = initialState, action) => {
    let sort = {};
    switch(action.type) {
        case types.SORT: 
            sort = {...action.sort, value:parseInt(action.sort.value)}
            return sort;
        default: return state;
    }
}

export default myReducer;