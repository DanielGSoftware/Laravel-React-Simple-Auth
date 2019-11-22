import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Register from './components/Auth/Register/Register';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        };
    }

    App = () => (
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </div>
    );

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Register}/>
                <Route exact path="/register" component={Register}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('index'));
