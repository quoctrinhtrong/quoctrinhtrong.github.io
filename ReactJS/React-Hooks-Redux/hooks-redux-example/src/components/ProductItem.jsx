import React from 'react';

const ProductItem = ({ productItem, addToCart }) => {
    return (
        <div className='product-item'>
            <div className='product-item-title'>{productItem.name}</div>
            <div className='product-ittem-quantity'>
                <span>x{productItem.quantity}</span>
                <button onClick={() => addToCart(productItem)} disabled={productItem.quantity == 0}>Mua product</button>
            </div>
        </div>
    )
}

export default ProductItem;