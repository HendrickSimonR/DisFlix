import React from 'react';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Disney Cinema</h1>
    <Link to='/login'>Log In</Link>
    <Route path='/' render={(props) => <SignupFormContainer {...props} />}></Route>
    {/* <Route path='/login' render={(props) => <SigninFormContainer {...props} />}></Route> */}
  </div>
);

export default App;