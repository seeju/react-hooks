
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../actions/MoviesActions';
import { Link } from 'react-router-dom';

export const Playlist = () => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { playlist } = moviesStore;
  console.log(playlist);

  return(
      <>
      <h1>Playlist</h1>
      {playlist.map((movie, index) => (
          <h5>
              <Link key={index} to={`/movie/${movie?.id}`}>
                {movie?.title}
                </Link>
                <button onClick={() => dispatch(removeMovie(index))}>
                Remove
              </button>
          </h5>

      ))}
      </>
  )
      }
