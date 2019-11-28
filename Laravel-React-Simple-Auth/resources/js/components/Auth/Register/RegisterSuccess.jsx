import React, {Component} from 'react';
import './styles.css';

export default class RegisterSuccess extends Component {

    componentDidMount() {
        this.props.login();
    }

    render() {
        return (
            <div className="container d-flex vh-100">
                <div className="signup-form my-auto text-center">
                    <form className="text-center">
                        <div className="row">
                            <div className="mx-auto col col-12">
                                <i className="far fa-check-circle" id="check-icon"/>
                            </div>
                        </div>
                        <div className="row">
                            <span className="mx-auto col col-12">
                            Signup successfull
                            </span>
                        </div>
                        <div className="row">
                            <span className="mx-auto col col-12">
                            Automatically logging in...
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
