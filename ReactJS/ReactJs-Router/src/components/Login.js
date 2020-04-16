import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName:"",
            txtPassword:"",
            loggedIn: false
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value= target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { txtUserName, txtPassword } = this.state;
        let {location} = this.props;
        if(txtUserName === "admin" && txtPassword === "admin") {
            localStorage.setItem("user",JSON.stringify({
                user: txtUserName,
                password: txtPassword
            }));
            this.setState({
                loggedIn: true
            });
        }
    }

    render() {
        let {txtUserName, txtPassword, loggedIn} = this.state;
        let loginInfo = localStorage.getItem("user");
        let {location} = this.props;
        if(loggedIn) {
            return <Redirect  to={{
                pathname: '/products',
                state: {
                    from: location
                }
            }}></Redirect>
        } 
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
                    <form role="form" onSubmit={this.onSubmit}>
                        <legend>Đăng nhập để xem sản phẩm</legend>
                    
                        <div className="form-group">
                            <label >User Name:</label>
                            <input onChange={this.onChange} value={txtUserName} name="txtUserName" type="text" className="form-control" id="" placeholder="Input field"/>
                        </div>

                        <div className="form-group">
                            <label >Password:</label>
                            <input onChange={this.onChange} value={txtPassword} name="txtPassword" type="text" className="form-control" id="" placeholder="Input field"/>
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    
                </div>
            </div>
            
          );
    }
}

export default Login;
