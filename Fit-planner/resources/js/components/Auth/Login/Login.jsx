import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {onChange, login} from '../../Helpers/Utilities';

export default class Login extends Component {
    constructor() {
        super();
        this.state = ({
            email: '',
            password: '',
            errors: {},
            isLoading: false,
        });
        this.onChange = onChange.bind(this);
        this.onLogin = login.bind(this);
    };

    render() {
        return (
            <LoginForm
                errors={this.state.errors}
                onChange={this.onChange}
                onLogin={this.onLogin}
                isLoading={this.state.isLoading}
            />
        )
    }


}
