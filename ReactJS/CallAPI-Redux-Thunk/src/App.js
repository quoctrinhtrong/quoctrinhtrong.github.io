import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './conponents/Menu/Menu';
import routes from './routes';


class App extends Component {
  showContentMenus = (routes) => {
    let result = null;
    result = routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
    });
    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
