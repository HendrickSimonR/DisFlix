import React from 'react';
import SelectProfile from '../selectProfile/select_profile';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this)
  }

  handleSignout() {
    this.props.signout();
    // this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <SelectProfile />
        <button 
          className='signout-button' 
          onClick={this.handleSignout}>GETCHO MONEY!!!
      </button>
      </div>
    );
  }
}

export default Home;