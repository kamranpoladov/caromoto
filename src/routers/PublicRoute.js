import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../utilities/isAuthenticated';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated(localStorage.getItem('tokenIssueTime'))
        ? 
        (
            <Redirect to='/' />
        )
        :
        (
            <div>
                <Component {...props} />
            </div>
        )
    )} />
);