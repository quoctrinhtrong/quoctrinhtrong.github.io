import React, { Component } from 'react';

class CartResult extends Component {

    showTotalAmount = (cart) => {
        let result = 0;
        if(cart.length > 0) {
            result = cart.reduce((total, cartItem) => {
                total += cartItem.product.price * cartItem.quantity;
                return total;
            }, 0);
        }
        return result;
    }
    render() {
        let { cart } = this.props;

        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartResult;
