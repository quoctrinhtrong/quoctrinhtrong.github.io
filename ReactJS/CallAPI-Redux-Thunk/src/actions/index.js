import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProduct(res.data));
        });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type:Types.ADD_PRODUCT,
        product
    };
}

export const actAddProductRequest = product => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actGetUpdateProduct = (product) => {
    return {
        type: Types.GET_UPDATE_PRODUCT,
        product
    }
}

export const actGetUpdateProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            return dispatch(actGetUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actResetItemEditing = () => {
    return {
        type: Types.RESET_ITEM_EDITING
    }
}


