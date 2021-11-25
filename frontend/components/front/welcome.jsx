import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = { username: "MickeyMouse", password: "imagination" };
    this.props.signin(demo)
    // .then(
    //   () => this.props.history.push('/dashboard')
    // );
  }

  render() {
    return (
      <div className="welcome">
        <h1 className="splash-header">Unlimited Disney magic.</h1>
        <h3 className="splash-description">Watch anywhere. Cancel anytime.</h3>
        <button 
          className='demobutton' 
          onClick={this.handleDemo}>DEMO LOGIN
        </button>
        <br />
        <h3 className="terms">Stream now. Terms apply.</h3>
        <img src={window.brands} className="brands-logo" />
      </div>
    )
  }
}

export default Welcome;