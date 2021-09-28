import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/action';
import ProductItem from './ProductItem';

const ProductList = ({ productList, addToCart }) => {
    return (
        <React.Fragment>
            <h2 className='title'>Product List use connect Redux</h2>
            <div className='product-list'>
                {productList.map(product => (
                    <ProductItem key={product.id} productItem={product} addToCart={addToCart}/>
                ))}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        productList: state.products
    }
}

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);