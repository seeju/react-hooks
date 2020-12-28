export const actions = {
  moviesList: 'MoviesList',
  insertMovie: 'InsertMovie',
  removeMovie: 'RemoveMovie',
}; 

export const moviesList = (id, movies) => ({
  type: actions.moviesList,
  id,
  movies,
});

export const insertMovie = (movie) => ({
  type: actions.insertMovie,
  movie,
});

export const removeMovie = (id) => ({
  type: actions.removeMovie,
  id,
});

