import { fetchMovies, fetchMovie } from '../util/movie_api';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = ({ movie }) => ({
  type: RECEIVE_MOVIE,
  movie
});

export const fetchMovies = () => dispatch => {
  return fetchMovies().then(
    movies => dispatch(receiveMovies(movies))
  );
};

export const fetchMovie = id => dispatch => {
  return fetchMovie(id).then(
    movie => dispatch(receiveMovie(movie))
  );
};