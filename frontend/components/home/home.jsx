import React from 'react';
import SelectProfile from '../selectProfile/select_profile';
import BrandButtons from './brand_buttons';
import Nav from './nav/nav';

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
      <div className="home-container">
        <div className="home-main">
        <BrandButtons />
        <SelectProfile />
          <div className='sign-out-container'>
            <button 
              className='signout-button' 
              onClick={this.handleSignout}>SIGN OUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;