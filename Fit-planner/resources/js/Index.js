import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './components/Auth/Register/Register';
import {PrivateRoute, GuestRoute} from "./components/Helpers/RestrictedRoutes";
import Login from "./components/Auth/Login/Login";

class Index extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
    }

    render() {
        return (
            <BrowserRouter>
                <GuestRoute exact path="/register" component={Register}/>
                <GuestRoute exact path="/login" component={Login}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('index'));
