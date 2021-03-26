import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './VIEW/login';
import Homepage from './VIEW/homepage';
import Browser from "./VIEW/browser";

import BookView from "./VIEW/bookview";
/*
class BasicRoute extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/homepage" component={Homepage}/>
                    <Route exact path="/browser" component={Browser}/>

                </Switch>
            </Router>
        )
    }


}*/
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/browser" component={Browser}/>
            <Route exact path="/bookview" component={BookView}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;