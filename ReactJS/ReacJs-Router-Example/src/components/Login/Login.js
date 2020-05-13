import React, { Component, Fragment } from "react";
import './Styles.css'
import fakeAuth from '../FakeAuth/fakeAuth';
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state= {
      redirectToRefer: false,
    }
  }

  onLogin = () => {
    fakeAuth.authenticate(()=> {
      this.setState({
        redirectToRefer: true,
      });
      this.props.setLogged(true);
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/'}};
    const { redirectToRefer } = this.state;
    if (redirectToRefer) {
      return (
        <Redirect to={from}/>
      );
    }
    return (
      <div className="login__container">
        <button className="login__button" onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
