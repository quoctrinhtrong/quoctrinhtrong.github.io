export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

export const toggleOpenShop = () => {
    return {
        type: 'TOGGLE_OPEN_SHOP'
    };
};