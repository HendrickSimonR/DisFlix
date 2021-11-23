import React from 'react';

class Dashboard extends React.Component {
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
      <button 
        className='signout-button' 
        onClick={this.handleSignout}>Sign Out
      </button>
    );
  }
}

export default Dashboard;