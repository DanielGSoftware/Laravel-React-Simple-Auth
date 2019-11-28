import React, {Component} from 'react';
import '../Header.css';
import {Link} from 'react-router-dom';
import {logout} from '../Auth/Logout/Logout';

export default class Header extends Component {

    constructor() {
        super();
        this.logout = logout.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a target="_blank" rel="noopener noreferrer" className="navbar-brand"
                   href="https://github.com/DanielGSoftware/Fit-planner/tree/master/Fit-planner">
                    <img className="img img-fluid" src="https://i.ibb.co/hRCxGkB/Github-Logo.png"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right logout">
                        <li onClick={this.logout}>
                            <i className="fas fa-sign-out-alt"/> Logout
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}
