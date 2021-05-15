import React from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Login from '../VIEW/login';
import Homepage from '../VIEW/homepage';
import Browser from "../VIEW/browser";
import Signin from "../VIEW/signin";
import BookView from "../VIEW/bookview";
import Cart from "../VIEW/cartview";
import AdminView from "../VIEW/adminView";
import Payview from "../VIEW/payview";
import {history} from "../utils/history";
import LoginRoute from "./loginrouter";
import PrivateRoute from "./PrivateRoute";
class ComRoute extends React.Component {

    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            // console.log(location, action);
        });
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <LoginRoute exact path="/login" component={Login}/>
                    <PrivateRoute exact path="/" component={Homepage}/>
                    <PrivateRoute exact path="/browser" component={Browser}/>
                    <PrivateRoute exact path="/bookview" component={BookView}/>
                    <PrivateRoute exact path="/register" component={Signin}/>
                    <PrivateRoute exact path="/cart" component={Cart}/>
                    <PrivateRoute exact path="/admin" component={AdminView}/>
                    <PrivateRoute exact path="/pay" component={Payview}/>
                    <Redirect from={'/*'} to={{pathname: "/"}}/>
                </Switch>
            </Router>
        )
    }
}

export default ComRoute;