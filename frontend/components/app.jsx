import React from 'react';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './home/home_container';
import SearchContainer from './search/search_container';
import NavContainer from './home/nav/nav_container';
import AllSorted from './sorted/sorted_container';
import SplashPage from './splash/splash_page';
import MovieShowContainer from './movie/movie_show_container';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Shield from './shield/shield';

const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/" component={NavContainer} />
    </header>

    <AuthRoute component={SplashPage} />

    <ProtectedRoute path="/" component={Shield} />
    
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
      <ProtectedRoute path="/search/:search" component={SearchContainer} />
      <ProtectedRoute path="/movie" component={MovieShowContainer} />
    </Switch>
  </div>
);

export default App;