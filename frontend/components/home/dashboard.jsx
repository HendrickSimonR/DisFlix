import React from 'react';
import { Link, Route } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout() {
    this.props.signout();
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="home-container">
        <button 
          className='signout-button' 
          onClick={this.handleSignout}>GETCHO MONEY!!!
        </button>
      </div>
    );
  }
}

export default Home;