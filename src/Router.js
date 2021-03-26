import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './VIEW/login';
import Homepage from './VIEW/homepage';
import Browser from "./VIEW/browser";
import Bookdetail from'./bookdetail'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/browser" component={Browser}/>
           
        </Switch>
    </HashRouter>
);


export default BasicRoute;