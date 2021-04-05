import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './VIEW/login';
import Homepage from './VIEW/homepage';
import Browser from "./VIEW/browser";
import Signin from "./VIEW/signin";
import BookView from "./VIEW/bookview";
import Cart from "./VIEW/cartview";
import AdminView from "./VIEW/adminView";
import Payview from "./VIEW/payview";


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/browser" component={Browser}/>
            <Route exact path="/bookview" component={BookView}/>
            <Route exact path="/register" component={Signin}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/admin" component={AdminView}/>
            <Route exact path="/pay" component={Payview}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;