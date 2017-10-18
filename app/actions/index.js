import MovieDataCleaner from '../helpers/movieDataCleaner';
//action for submitting login info- alters user
//action for creating new user- alters user
//action for favoriting a movie- alters userFaves
//action for unfavoriting a movie- alters userFaves
//action for getting favorite movies- I don't think we need this, it's just a Link/NavLink
//action for signing out- alters user

// what do we need in store?
// user
// movies
// userFaves

export const fetchDataSuccess = movieData => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    movies: movieData
  };
};

export const fetchData = () => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ae328e93030c86dea9c76285dbb0fafd&language=en-US`)
      .then(response => response.json())
      .then(responseJSON => responseJSON.results)
      .then(moviesArray => MovieDataCleaner(moviesArray))
      .then(movies => dispatch(fetchDataSuccess(movies)));
  };
};
