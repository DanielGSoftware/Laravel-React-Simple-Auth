import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import RenderErrors from '../../Helpers/RenderErrors';

export default class RegisterForm extends Component {

    renderButtonChild() {
        return this.props.isLoading ? (
            <div className="spinner-border spinner-border-sm text-light" role="status"/>) : ('Sign up');
    }

    render() {
        return (
            <div className="container d-flex vh-100">
                <div className="signup-form my-auto">
                    <form method="post">
                        <h2>Create Account</h2>
                        <p className="lead">It's free and hardly takes more than 30 seconds.</p>
                        <div className="form-group">
                            <div className="input-group">
                                <span className='input-group-addon'><i className="fa fa-user "/></span>
                                <input type="email" className="form-control" name="name" onChange={this.props.onChange}
                                       placeholder="Name"
                                       required/>
                            </div>
                        </div>
                        <RenderErrors field='name' errors={this.props.errors}/>
                        <div className="form-group">
                            <div className="input-group">
                                <span className='input-group-addon'><i className="fas fa-envelope"/></span>
                                <input type="email" className="form-control" name="email" onChange={this.props.onChange}
                                       placeholder="Email Address"
                                       required/>
                            </div>
                        </div>
                        <RenderErrors field='email' errors={this.props.errors}/>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"/></span>
                                <input type="password" className="form-control" name="password"
                                       onChange={this.props.onChange}
                                       placeholder="Password"
                                       required/>
                            </div>
                        </div>
                        <RenderErrors field='password' errors={this.props.errors}/>
                        <div className="form-group">
                            <div className="input-group">
				                <span className="input-group-addon">
					                <i className="fa fa-lock"/>
					                <i className="fa fa-check"/>
				                </span>
                                <input type="password" className="form-control" name="password_confirmation"
                                       placeholder="password_confirmation" onChange={this.props.onChange} required/>
                            </div>
                        </div>
                        <RenderErrors field='password_confirmation' errors={this.props.errors}/>
                        <div className="form-group">
                            <button type="submit" onClick={this.props.onRegister}
                                    className="btn btn-primary btn-block btn-lg" id='sign-up-btn'
                                    disabled={this.props.isLoading}>
                                {this.renderButtonChild()}
                            </button>
                        </div>

                    </form>
                    <div className="text-center">
                        Already have an account?
                        <Link to={'/login'}> Login here</Link>
                    </div>
                </div>
            </div>
        )
    }
}


