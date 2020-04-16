import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        let products = [
            {
                id: 1,
                slug: "iphone",
                name: "Iphone X",
                price: 350000
            },
            {
                id: 2,
                slug: "samsung",
                name: "Samsung X",
                price: 400000
            },
            {
                id: 3,
                slug: "apple",
                name: "AppleXR",
                price: 20000
            }
        ];

        let {match} = this.props;
        let url = match.url;
        // console.log(match);

        let result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`}  key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        })

        let {location} = this.props;
        return (
            <div className="container">
                Product list.
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product}/>
                </div>
                
            </div>
          );
    }
}

export default Products;
