import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader';

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import AuthenticationForm from '../components/AuthenticationForm';

const AppRouter = () => {
    const [loaded, setLoaded] = useState(false);

    setInterval(() => {
        setLoaded(true);
    }, 1500);
    
    return (
        <BrowserRouter>
            <div>
                <Loader loaded={loaded}>
                    <Header />
                    <Switch>
                        <Route path='/' component={HomePage} exact={true} />
                        <Route path='/login' component={AuthenticationForm} />
                    </Switch>
                </Loader>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;