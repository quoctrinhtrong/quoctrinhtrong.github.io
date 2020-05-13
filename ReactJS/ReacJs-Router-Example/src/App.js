import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from "./components/About/About";
import fakeAuth from "./components/FakeAuth/fakeAuth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    }
  }
  setLogged = (value) => {
    this.setState({
      isLogged: value,
    })
  }
  showContentMenu = (routes) => {
    var xhtml = null;
    if (routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      })
    }
    return xhtml;
  };

  render() {
    return (
      <Router>
        <div>
          <Menu isLogged={this.state.isLogged} setLogged={this.setLogged}/>
          <Switch>
            {/* {this.showContentMenu(routes)} */}
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={(location) => <Login setLogged={this.setLogged} location={location}/>}></Route>
            <Route path="/about" component={About}></Route>
            <PrivateRoute path="/product" component={Product}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
