import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Register from './components/Auth/Register/Register';
import {PrivateRoute, GuestRoute} from "./components/Helpers/RestrictedRoutes";
import Login from "./components/Auth/Login/Login";
import Home from './components/Home';

class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <GuestRoute exact path="/register" component={Register}/>
                <GuestRoute exact path="/login" component={Login}/>
                <PrivateRoute exact path="/" component={Home}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('index'));
