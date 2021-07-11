import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/globals.css';
import App from './App';



const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;