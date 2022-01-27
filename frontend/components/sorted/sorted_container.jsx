import Watchlist from './watchlist';
import Disney from './disney';
import Pixar from './pixar';
import Marvel from './marvel';
import StarWars from './starWars';
import NatGeo from './natGeo';
import { connect } from 'react-redux';
import { selectMovies } from '../../selectors/movie_selector';
import { getMovies } from '../../actions/movie_actions'; 
import { signout } from '../../actions/session_actions';
import { getWatchlist, removeMovie } from '../../actions/watchlist_actions';

function shadowFilter(state) {
  let image = document.getElementById('brand-container-poster');
  let video = document.getElementById('brand-container-video');
  // let props = this.props;

  if ($(window).scrollTop() < 100) {
    image.style.transition = 'none';
    image.style.filter = 'brightness(100%)';
    video.style.transition = 'none';
    video.style.filter = 'brightness(100%)';
          // $('#brand-container-video').removeClass('scrolled');
          // $('#brand-container-poster').removeClass('scrolled');
  } else {
    image.style.transition = 'all 0.3s ease 0s';
    image.style.filter = 'brightness(30%)';
    video.style.transition = 'all 0.3s ease 0s';
    video.style.filter = 'brightness(30%)';
  }
   if (window.modal) {
          image.style.transition = 'none';
          image.style.filter = 'brightness(30%)';
          video.style.transition = 'none';
          video.style.filter = 'brightness(30%)';
          // $('#brand-container-video').addClass('scrolled');
          // $('#brand-container-poster').addClass('scrolled');
          // $('#brand-container-video').addClass('scrolled');
          // $('#brand-container-poster').addClass('scrolled');
  }
}

const mSTP = state => {
  let allMovies = selectMovies(state);
  let disneyFilms = [];
  let pixarFilms = [];
  let marvelFilms = [];
  let starWarsFilms = [];
  let natGeoFilms = [];
  let brandId;


  for (let i = 0; i < allMovies.length; i++) {
    let film = allMovies[i];

    if (film.brand_id === 1) {
      disneyFilms.push(film);

    } else if (film.brand_id === 2) {
      pixarFilms.push(film);

    } else if (film.brand_id === 3) {
      marvelFilms.push(film);

    } else if ((film.brand_id === 4)) {
      starWarsFilms.push(film);

    } else {
      natGeoFilms.push(film);
    }
  }

  if (window.location.href.includes('disney')) {
    brandId = 1;
  } else if (window.location.href.includes('pixar')) {
    brandId = 2;
  } else if (window.location.href.includes('marvel')) {
    brandId = 3;
  } else if (window.location.href.includes('starwars')) {
    brandId = 4;
  } else if (window.location.href.includes('natgeo')) {
    brandId = 5;
  } else {
    brandId = 0;
  }

  console.log('sorted state', state)
  return ({
    current_brand: brandId,
    user: state.session.id,
    brands: state.brands,
    likes: state.likes,
    dislikes: state.dislikes,
    movies: allMovies,
    modal: state.modal,
    disney: disneyFilms,
    pixar: pixarFilms,
    marvel: marvelFilms,
    starWars: starWarsFilms,
    natGeo: natGeoFilms,
    watchlist: state.watchlist,
    shadowFilter: shadowFilter,
    test: state.brands[state.brands.length - 1]
  })
};

const mDTP = dispatch => ({
  signout: () => dispatch(signout()),
  getMovies: () => dispatch(getMovies()),
  getWatchlist: userId => dispatch(getWatchlist(userId)),
  removeMovie: data => dispatch(removeMovie(data))
});

const AllSorted = {
  disney: connect(mSTP, mDTP)(Disney),
  watchlist: connect(mSTP, mDTP)(Watchlist),
  pixar: connect(mSTP, mDTP)(Pixar),
  marvel: connect(mSTP, mDTP)(Marvel),
  starWars: connect(mSTP, mDTP)(StarWars),
  natGeo: connect(mSTP, mDTP)(NatGeo)
}

export default AllSorted;

// KEEP