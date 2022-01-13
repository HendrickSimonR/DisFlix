import React from 'react';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import NavContainer from './home/nav/nav_container';
import SortedContainer from './sorted/sorted_container';
import WatchlistContainer from './watchlist/watchlist_container';
import SplashPage from './splash/splash_page';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/" component={NavContainer} />
    </header>

    <AuthRoute component={SplashPage} />
    <Switch>
      <AuthRoute exact path="/signin" component={SigninFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/watchlist" component={WatchlistContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      {/* <ProtectedRoute path="/brands/:id" component={BrandContainer} /> */}
      <ProtectedRoute path="/disney" component={SortedContainer} />
      <ProtectedRoute path="/pixar" component={SortedContainer} />
      <ProtectedRoute path="/marvel" component={SortedContainer} />
      <ProtectedRoute path="/starwars" component={SortedContainer} />
      <ProtectedRoute path="/natgeo" component={SortedContainer} />
      <ProtectedRoute path="/watchlist" component={SortedContainer} />
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