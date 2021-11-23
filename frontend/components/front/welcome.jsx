import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = { username: "MickeyMouse", password: "imagination" };
    this.props.signin(demo);
    this.props.history.push('/browse');
  }

  render() {
    return (
      <div className="welcome">
        <h1 className="splash-header">Unlimited Disney magic.</h1>
        <h3 className="splash-description">Watch anywhere. Cancel anytime.</h3>
        <button className='demobutton' onClick={this.handleDemo}>Try it out!</button>
      </div>
    )
  }
}

export default Welcome;