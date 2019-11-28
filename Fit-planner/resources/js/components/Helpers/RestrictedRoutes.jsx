import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isLogin} from './Utilities';

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
                : <Redirect to="/login"/>
        )}/>
    );
};

export const GuestRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to="/"/>
                : <Component {...props} />
        )}/>
    );
};
