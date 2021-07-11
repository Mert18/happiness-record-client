import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/globals.css';
import App from './App';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/register" exact component={RegisterScreen} />
                <Route path="/login" exact component={LoginScreen} />
                <Route path="/profile" exact component={ProfileScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;