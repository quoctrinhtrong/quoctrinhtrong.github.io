import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Product from "../Product/Product";
import About from "../About/About";

class Home extends Component {
  render() {
    let { match } = this.props;
    let url = match.url;
    console.log("url: ", url);
    console.log("match: ", match);
    return (
      <Fragment>
        <div>
          <h1>This is Home Page</h1>
          {/* <Switch>
            <Route exact path='/' component={About} />
            <Route path='/product' component={Product} />
          </Switch> */}
        </div>
      </Fragment>
    );
  }
}

export default Home;
