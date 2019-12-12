import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import AuthenticationForm from '../components/AuthenticationForm';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/login' component={AuthenticationForm} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;