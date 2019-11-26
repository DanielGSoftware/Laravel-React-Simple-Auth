import React, {Component} from 'react';

export default class RenderErrors extends Component {

    renderErrors = () => {
        if (this.props.isMessage) {
            if (this.props.errors.message) {
                return (
                    <div className="form-group">
                        <span className="text-center error-text">
                            {this.props.errors.message}
                        </span>
                    </div>
                );
            }
        } else {

            // Get the input field
            const field = this.props.field;
            const inputField = $('input[name=' + field);

            // Determine the field in which the error is located
            let errorField = field;
            if (field.includes('confirmation')) {
                errorField = field.split('_')[0];
            }

            let errors = this.props.errors[errorField];

            if (errors) {
                let filteredErrors = [];
                errors.map(error => {
                    const handleError = (error) => {
                        filteredErrors.push(error);
                        inputField.addClass('border-danger');
                    };

                    if (error.includes('confirmation') && field.includes('confirmation')) {
                        handleError(error);
                    } else if (!error.includes('confirmation') && !field.includes('confirmation')) {
                        handleError(error);
                    }

                });

                return (
                    <div className="form-group">
                        <span className="text-center error-text">
                               {filteredErrors.map(error => {
                                   return (<div key={error}>{error}</div>)
                               })}
                        </span>
                    </div>);

            }
            inputField.removeClass('border-danger');
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.renderErrors()}
            </React.Fragment>
        )
    }
}
