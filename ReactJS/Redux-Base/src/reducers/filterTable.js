import * as types from '../constants/ActionTypes';

var initialState = {
    filterName:"",
    filterStatus: -1
};

var myReducer = (state = initialState, action) => {
    let filter = {};
    switch(action.type) {
        case types.FILTER_TABLE: 
            filter = {...action.filter, filterStatus:parseInt(action.filter.filterStatus)}
            return filter;
        default: return state;
    }
}

export default myReducer;