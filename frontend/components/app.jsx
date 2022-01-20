import React from 'react';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import NavContainer from './home/nav/nav_container';
import AllSorted from './sorted/sorted_container';
import SplashPage from './splash/splash_page';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/" component={NavContainer} />
    </header>

    <AuthRoute component={SplashPage} />
    <Modal/>
    <Switch>
      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute path="/disney" component={AllSorted.disney} />
      <ProtectedRoute path="/pixar" component={AllSorted.pixar} />
      <ProtectedRoute path="/marvel" component={AllSorted.marvel} />
      <ProtectedRoute path="/starwars" component={AllSorted.starWars} />
      <ProtectedRoute path="/natgeo" component={AllSorted.natGeo} />
      <ProtectedRoute path="/watchlist" component={AllSorted.watchlist} />
    </Switch>
    {/* <Footer/> */}
  </div>
);

export default App;



/* 
    <Link to='/login'>Log In</Link>
    <Route path='/' render={(props) => <SignupFormContainer {...props} />}></Route> */
/* <Route path='/signup' component={SignupFormContainer} /> */ 

/* <Route path='/login' render={(props) => <SigninFormContainer {...props} />}></Route> */ 