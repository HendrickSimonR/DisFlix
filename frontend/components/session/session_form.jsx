import React from 'react';
import SigninForm from './signin_form';
import SignupForm from './signup_form';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.props.history.push('/browse');
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <div>
        {
          this.props.formType === 'Sign In' ? 
            <SigninForm
              handleSubmit={this.handleSubmit}
              update={this.update}
              formType={this.props.formType}
            /> :
            <SignupForm
              handleSubmit={this.handleSubmit}
              update={this.update}
              formType={this.props.formType}
            />
        }
      </div>
    );
  }
}

export default SessionForm;