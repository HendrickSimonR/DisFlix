import React from 'react';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import SplashPage from './front/splash_page';
import NavContainer from './home/nav/nav_container';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>    
    
    <header>
      <ProtectedRoute path="/home" component={NavContainer} />
    </header>
    
    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;



/* 
    <Link to='/login'>Log In</Link>
    <Route path='/' render={(props) => <SignupFormContainer {...props} />}></Route> */
/* <Route path='/signup' component={SignupFormContainer} /> */ 

/* <Route path='/login' render={(props) => <SigninFormContainer {...props} />}></Route> */ 