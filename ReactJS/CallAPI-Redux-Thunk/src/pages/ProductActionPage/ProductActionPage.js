import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actAddProductRequest, actGetUpdateProductRequest, actUpdateProductRequest, actResetItemEditing} from '../../actions/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            txtName:"",
            txtPrice:"",
            chkbStatus:false,
        }
    }

    componentDidMount() {
        let {match} = this.props;
        let id = "";
        if (match) {
            id = match.params.id;
            this.props.onGetUpdateProduct(id);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        let {name, price, status, id} = nextProps.itemEditing;

        if (id !== prevState.id && id && nextProps.match) {
            console.log(id);
            return {
                id: id,
                txtName: name,
                txtPrice: price,
                chkbStatus: status
            }
        }
        return null;
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        let {txtName, txtPrice, chkbStatus, id} = this.state;
        let {history} = this.props;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {
            this.props.onUpdateProduct(product);
            this.props.onResetItemEditing();
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }
    render() {
        let {txtName, txtPrice, chkbStatus, id} = this.state;
        return (   
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                <form action="" role="form" onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input type="text" className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Product Price: </label>
                        <input type="text" className="form-control" id="" placeholder="Input field" name="txtPrice" value={txtPrice}  onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Product Status: </label>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="" name="chkbStatus" checked={chkbStatus} value={chkbStatus} onChange={this.onChange}/>
                                Available
                            </label>
                        </div>
                    </div>
                    <Link className="btn btn-danger mr-10" to="/product-list">Back</Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onGetUpdateProduct: (id) => {
            dispatch(actGetUpdateProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
        onResetItemEditing: () => {
            dispatch(actResetItemEditing());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);