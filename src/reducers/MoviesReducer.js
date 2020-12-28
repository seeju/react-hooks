import { actions as moviesActions } from '../actions/MoviesActions';

const initialState = {
    movies: {},
    playlist: [],
  };
  
const MoviesReducer = (state = initialState, action) => {
    let movies, playlist;
    switch (action.type) {
        case moviesActions.moviesList:
            movies = { ...state.movies };
            movies[action.id] = action.movies;
            return {
                ...state,
                movies,
            };
        case  moviesActions.insertMovie:
            playlist = [...new Set([...state.playlist, action.movie])];
            return {
              ...state,
              playlist,
            };
      
        case moviesActions.removeMovie:
            playlist = state.playlist.filter((_, i) => i !== action.id);
            return {
              ...state,
              playlist,
            };
      
          default: return state;
    }
};

export default MoviesReducer;