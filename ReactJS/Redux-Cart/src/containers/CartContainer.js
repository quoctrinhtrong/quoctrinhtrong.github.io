import React, { Component } from 'react';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from '../constants/Message';
import * as actions from '../actions/index'

class CartContainer extends Component {
    showCartItem = (cart) => {
        let result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;

        if(cart.length > 0) {
            result = cart.map((cartItem,index)=> {
                return <CartItem 
                            key={index} 
                            cart={cartItem} 
                            onDeleteProductInCart={this.props.onDeleteProductInCart} 
                            onChangeMessage={this.props.onChangeMessage} 
                            onUpdateProductInCart={this.props.onUpdateProductInCart}
                        ></CartItem>
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }
    render() {
        let {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}

// Check type in prop
// https://reactjs.org/docs/typechecking-with-proptypes.html
CartContainer.propTypes = {
    // check array
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,       
                description: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (id) => {
            dispatch(actions.deleteProductInCart(id));
        },
        onChangeMessage: (message) => {
            dispatch(actions.addChangeMessage(message));
        },
        onUpdateProductInCart: (id,quantity) => {
            dispatch(actions.updateProductInCart(id,quantity));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
