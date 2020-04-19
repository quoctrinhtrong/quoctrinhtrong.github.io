import React, { Component } from 'react';
import ProductList from '../../conponents/ProductList/ProductList';
import ProductItem from '../../conponents/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductRequest} from '../../actions/index';

class ProductListPage extends Component {
    showProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}></ProductItem>;
            });
        }
        return result;
    }
    onDelete = (id) => {
        this.props.deleteProductRequest(id);
    }
    
    componentDidMount() {
        this.props.fetchProductRequest();
    }
    
    render() {
        // let {products} = this.props;
        let {products} = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10 ">Add Product</Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        products: state.products,
    });
}

const mapDispatchToProps = (dispatch, props) => {
    return ({
        fetchProductRequest: () => {
            dispatch(actFetchProductsRequest());
        },
        deleteProductRequest: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);