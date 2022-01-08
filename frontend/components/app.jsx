import React from 'react';
import MovieOrganizer from'./brand/movie_organizer';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import NavContainer from './home/nav/nav_container';
import BrandContainer from './brand/brand_container';
import WatchlistContainer from './watchlist/watchlist_container';
import SplashPage from './splash/splash_page';
import Footer from './splash/footer'
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
      <ProtectedRoute path="/disney" component={BrandContainer} />
      <ProtectedRoute path="/pixar" component={BrandContainer} />
      <ProtectedRoute path="/marvel" component={BrandContainer} />
      <ProtectedRoute path="/starwars" component={BrandContainer} />
      <ProtectedRoute path="/natgeo" component={BrandContainer} />
      <ProtectedRoute path="/watchlist" component={WatchlistContainer} />
    </Switch>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;



/* 
    <Link to='/login'>Log In</Link>
    <Route path='/' render={(props) => <SignupFormContainer {...props} />}></Route> */
/* <Route path='/signup' component={SignupFormContainer} /> */ 

/* <Route path='/login' render={(props) => <SigninFormContainer {...props} />}></Route> */ 