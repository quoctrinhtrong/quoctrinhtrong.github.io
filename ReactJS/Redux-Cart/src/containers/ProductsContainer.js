import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ProductsContainer extends Component {
    showProducts = (products) => {
        let result = null;
        let {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0) {
            result = products.map((product,index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
            });
        }
        return result;
    }
    render() {
        let {products} = this.props;
        return (
            <Products> 
                {this.showProducts(products)}
            </Products>
        );
    }
}

// Check type in prop
// https://reactjs.org/docs/typechecking-with-proptypes.html
ProductsContainer.propTypes = {
    // check array
    products: PropTypes.arrayOf(
        // check element
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,       
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product,1));
        },

        onChangeMessage: (message) => {
            dispatch(actions.addChangeMessage(message));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
