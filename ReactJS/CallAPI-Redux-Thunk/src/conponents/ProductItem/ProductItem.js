import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id) => {
        if(window.confirm('Are you want delete this product?')) {
            this.props.onDelete(id);
        }
    }
    render() {
        let {product, index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label ${product.status ? "label-default": "label-warning"}`}>
                        {product.status ? "Avaiable" : "Outlet"}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;