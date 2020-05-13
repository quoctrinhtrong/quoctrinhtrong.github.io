import React, { Component } from 'react';
import './Styles.css'
import { Link, withRouter } from 'react-router-dom';
import fakeAuth from "../FakeAuth/fakeAuth";

class Menu extends Component {
    constructor(props) {
        console.log('Contructor')
        super(props);
        this.state = {
            setUpdate: 1
        }
    }

    onLogout = () => {
        fakeAuth.sigout(() => {
            console.log('Props: ', this.props);
            this.props.history.push("/login");
            this.props.setLogged(false);
        })
    }

    render() {
        console.log('Render')
        const { isLogged } = this.props;
        return (
            <div className="menu__container">
                <ul className="menu__list">
                    <li className="menu__item">
                        <Link className="menu__item-link menu__item-link--active" to="/">Home</Link>
                    </li>
                    <li className="menu__item">
                        <Link className="menu__item-link" to="/product">Product</Link>
                    </li>
                    <li className="menu__item">
                        {isLogged ? (<div>Welcome user! <button onClick={this.onLogout}>Logout</button></div>):<Link className="menu__item-link" to="/login">Login</Link>}
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Menu);