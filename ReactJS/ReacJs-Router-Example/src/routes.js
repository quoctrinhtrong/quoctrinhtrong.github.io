import React from 'react';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: (match) => <Home match={match}/>
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    }
]

export default routes;