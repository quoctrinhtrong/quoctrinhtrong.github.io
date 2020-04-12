import * as types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('cart'));
var initialStatte = data ? data: [];

const cart = (state = initialStatte, action) => {
    let cart = [...state];
    let index = -1;
    switch(action.type) {
        case types.ADD_TO_CART:
            index = cart.findIndex((item) => {
                return item.product.id === action.product.id;
            });
            if (index !== -1) {
                cart[index].quantity += action.quantity;
            } else {
                cart.push({
                    product: action.product,
                    quantity: action.quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
        case types.DELETE_PRODUCT_IN_CART: 
            index = cart.findIndex(item => {
                return item.product.id === action.id;
            })
            if(index !== -1) {
                cart.splice(index,1);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
        case types.UPDATE_PRODUCT_IN_CART: 
            index = cart.findIndex(item => {
                return item.product.id === action.id;
            });
            if(index !== -1) {
                cart[index].quantity = action.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
        default:
            return cart;
    };
}

export default cart;