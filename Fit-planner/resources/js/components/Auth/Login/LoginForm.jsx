import React, {Component} from 'react';
import RenderErrors from "../../Helpers/RenderErrors";
import {Link} from 'react-router-dom';

export default class LoginForm extends Component {

    renderButtonChild = () => {
        return this.props.isLoading ? (
            <div className="spinner-border spinner-border-sm text-light" role="status"/>) : ('Log in');
    };

    render() {
        return (
            <div className="container d-flex vh-100">
                <div className="signup-form my-auto">
                    <form method="post">
                        <h2>Login</h2>
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
                            <button type="submit" onClick={this.props.onLogin}
                                    className="btn btn-primary btn-block btn-lg" id='sign-up-btn'
                                    disabled={this.props.isLoading}>
                                {this.renderButtonChild()}
                            </button>
                        </div>
                        <RenderErrors errors={this.props.errors} isMessage={true}/>
                    </form>
                    <div className="text-center">
                        Don't have an account yet?
                        <Link to={'/register'}> Sign up here</Link>
                    </div>
                </div>
            </div>
        )
    }


}
