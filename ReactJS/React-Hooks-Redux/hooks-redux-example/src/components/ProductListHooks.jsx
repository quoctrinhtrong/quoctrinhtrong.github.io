import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { addToCart } from '../store/action';

const ProductListHooks = (props) => {
    const productList = useSelector( state => state.products);
    const dispatch = useDispatch();
    const dispatchAddToCart = (product) => dispatch(addToCart(product));
    return (
        <React.Fragment>
            <h2 className='title'>Product List use Hook Redux</h2>
            <div className='product-list'>
                {productList.map(product => (
                    <ProductItem key={product.id} productItem={product} addToCart={dispatchAddToCart}/>
                ))}
            </div>
        </React.Fragment>
    )
}

export default ProductListHooks;