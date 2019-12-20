import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader';

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import AuthenticationForm from '../components/AuthenticationForm';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
    const [loaded, setLoaded] = useState(false);

    const maxTranslationsLoadTime = 1500; // avg is around 1s, so I took a bit more for pleasant UX

    // Give page some time to load init translations
    // Otherwise user will see no text for 0.5-1 seconds
    // TODO: make loader look more pretty
    setInterval(() => {
        setLoaded(true);
    }, maxTranslationsLoadTime);
    
    return (
        <BrowserRouter>
            <div>
                <Loader loaded={loaded}>
                    <Header />
                    <Switch>
                        <PrivateRoute path='/' component={HomePage} exact={true} />
                        <PublicRoute path='/login' component={AuthenticationForm} />
                    </Switch>
                </Loader>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;