import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '', 
      password: '' 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.session.map((error, i) => (
          <div>
            <li key={i}>
              {error}
            </li>

            <br />

          </div>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.removeErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user).then(
      () => this.props.history.push('/home'));
  }

  render() {
    return (
      <div className="signin-form-container">
        <h1 className="form-header">
          {this.props.formGreeting}
        </h1>

        <form onSubmit={this.handleSubmit} className="sign-form-box">
          <div>
            {this.props.errors.session.length > 0 ? this.renderErrors() : ''}
          </div>
            
          <br />
            
          <div className="signin-form">
            <input 
              type="text"
              placeholder="Username"
              className="signin-input"
              value={this.state.username}
              onChange={this.update('username')}
            />

            <br />

            <input 
              type="password"
              placeholder="Password"
              className="signin-input"
              value={this.state.password}
              onChange={this.update('password')}
            />

            <br />
                
            <input 
              type="submit" 
              className="session-submit" 
              value={this.props.formType.toUpperCase()} 
            />

            <br />
          </div>
            
          <div className="session-option">
            <p>{this.props.question} {this.props.link}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;