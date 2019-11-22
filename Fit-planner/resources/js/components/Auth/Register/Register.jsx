import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import axios from 'axios';
import RegisterSuccess from './RegisterSuccess';

export default class Register extends Component {

    constructor() {
        super();
        this.state =
            {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                isLoading: false,
                errors: {},
                registrationSuccess: false
            };
    };

    onRegister = (e) => {
        e.preventDefault();
        if (!this.state.isLoading) {
            this.setState({
                isLoading: true,
                errors: {}
            });

            axios.post('/api/register', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.confirm_password
            }).then(res => {
                this.setState({registrationSuccess: true});
                console.log('registration successfull');
            }).catch(res => {
                this.setState({errors: res.response.data.errors, isLoading: false})
            });
        }
    };

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    renderForms = () => {
        if (this.state.registrationSuccess) {
            return <RegisterSuccess/>
        }
        return <RegisterForm
            onRegister={this.onRegister}
            onChange={this.onChange}
            errors={this.state.errors}
            isLoading={this.state.isLoading}
        />
    };

    render() {
        return (
            this.renderForms()
        )
    }

}
