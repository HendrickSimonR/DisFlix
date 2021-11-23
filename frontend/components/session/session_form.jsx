import React from 'react';
// import SigninForm from './signin_form';
// import SignupForm from './signup_form';

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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signin-form-container">
        <h1>{this.props.formGreeting}</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            {this.renderErrors()}
                <div className="signin-form">
                <br />
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signin-input"
                  />
                <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signin-input"
                  />
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
              <br />
            </div>
            <div className="session-option">
            {this.props.question} {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;



// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = props.user;
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let user = Object.assign({}, this.state);
//     this.props.submitForm(user)
//       .then(() => this.props.history.push({pathname: '/browse'}));
//   }

//   update(field) {
//     return e => {
//       this.setState({
//         [field]: e.target.value
//       });
//     };
//   }

//   render() {
//     return (
//       <div>
//         {
//           this.props.formType === 'Sign In' ? 
//             <SigninForm
//               handleSubmit={this.handleSubmit}
//               update={this.update}
//               formType={this.props.formType}
//             /> :
//             <SignupForm
//               handleSubmit={this.handleSubmit}
//               update={this.update}
//               formType={this.props.formType}
//             />
//         }
//       </div>
//     );
//   }
// }

// export default SessionForm;