import React, {Component} from 'react';
import * as Message from '../constants/Message';

class CartItem extends Component {
    showSubTotal = (quantity, price) => {
        return quantity * price;
    }

    onDelete = (id) => {
        this.props.onDeleteProductInCart(id);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    updateQuantity = (id, quantity) => {
        if(quantity > 0) {
            let {onUpdateProductInCart, onChangeMessage} = this.props;
            onUpdateProductInCart(id,quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    
    render() {
        let {cart} = this.props;
        let {quantity} = cart;
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image}
                        alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={()=>this.updateQuantity(cart.product.id,cart.quantity - 1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label 
                            onClick={()=>this.updateQuantity(cart.product.id,cart.quantity + 1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(cart.quantity, cart.product.price)}$</td>
                <td>
                    <button onClick={()=>this.onDelete(cart.product.id)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
