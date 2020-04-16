import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menu = [
    {
        label: 'Home',
        to: '/',
        exact: true  
    },
    {
        label: 'About',
        to: '/about',
        exact: false  
    },
    {
        label: 'Contact',
        to: '/contact',
        exact: false  
    },
    {
        label: 'Products',
        to: '/products',
        exact: false  
    },
    {
        label: 'Login',
        to: '/login',
        exact: false  
    }
];

// Custom Link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? "active abc" : "";
            return (
                <li className={`my-class-default-for-li '${active}`}>
                    <Link to={to} className="my-link">{label}</Link>
                </li>
            )
        }} />
    );
}

class Menu extends Component {
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu,index) => {
                return <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact} />
            });
        }
        return result;
    }
    render() {
        return (
            // Menu
            < nav className="navbar navbar-default" >
                <ul className="nav navbar-nav">
                    {this.showMenu(menu)}
                </ul>
            </nav >
        );
    }
}

export default Menu;
