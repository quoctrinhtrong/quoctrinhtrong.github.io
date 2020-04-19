import * as Types from '../constants/ActionTypes';

var initialState = {
            id:"",
            name:"",
            price:"",
            status:false,
};

const itemEditing = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_UPDATE_PRODUCT:
            console.log(action.product);
            state = action.product;
            return state;
        case Types.RESET_ITEM_EDITING:
            let defaultState = {
                id:"",
                name:"",
                price:"",
                status:false,
            };
            state = defaultState;
            return state;
        default:
            return state;
    }
}

export default itemEditing;