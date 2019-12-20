import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../utilities/isAuthenticated';

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated(localStorage.getItem('tokenIssueTime'))
        ? 
        (
            <div>
                <Component {...props} />
            </div>
        )
        :
        (
            <Redirect to='/login' />
        )
    )} />
);