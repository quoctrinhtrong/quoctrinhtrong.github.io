import React, {Component} from 'react';

class Product extends Component {
    render() {
        let {match} = this.props;
        let name = match.params.slug;
        return (
            <div>
                This page is Product Detail: {name}.
            </div>
          );
    }
}

export default Product;
