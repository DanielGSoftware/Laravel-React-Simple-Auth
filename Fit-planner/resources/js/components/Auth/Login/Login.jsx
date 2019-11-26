import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {onChange} from '../../Helpers/Utilities';


export default class Login extends Component {
    constructor() {
        super();
        this.state = ({
            email: '',
            password: '',
            errors: {},
            isLoading: false
        });
        this.onChange = onChange.bind(this);
    };

    onLogin = (e) => {
        e.preventDefault();
        if (!this.state.isLoading) {
            this.setState({
                isLoading: true,
                errors: {}
            });

            axios.post('/api/login', {
                    email: this.state.email,
                    password: this.state.password,
                }
            ).then(res => {
                    localStorage.setItem('api_token', JSON.stringify(res.data.api_token));
                    this.props.history.push("/");
                }
            ).catch(res => {
                    if (res.response.data.errors) {
                        this.setState({errors: res.response.data.errors})
                    } else {
                        this.setState({errors: res.response.data})
                    }
                    this.setState({isLoading: false})
                }
            )
        }
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
