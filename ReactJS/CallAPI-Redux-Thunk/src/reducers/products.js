import * as Types from '../constants/ActionTypes';
var initialState = [];

const products = (state = initialState, action) => {
    let products = [...state];
    let index = -1;
    switch(action.type) {
        case Types.FETCH_PRODUCT:
            products = action.products;
            return products;
        case Types.DELETE_PRODUCT: 
            index = products.findIndex(product => {
                return product.id === action.id;
            });
            if(index !== -1) {
                products.splice(index,1);
            }
            return products;
        case Types.ADD_PRODUCT:
            products = [...products, action.product];
            return products;
        case Types.UPDATE_PRODUCT: 
            index = products.findIndex(product => {
                return product.id === action.product.id;
            });
            if (index !== -1) {
                products[index] = action.product;
            }
            return products;
        default:
            return [...state];
    }
};

export default products;