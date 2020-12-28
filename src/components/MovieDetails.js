import React, { useEffect } from "react";
import {insertMovie } from "../actions/MoviesActions";
import { useDispatch } from 'react-redux';
import { useDetails } from "../hooks/useDetails";


export function MovieDetails (props) {
   const id = props?.match?.params?.id;
   const movie = useDetails(id);
   const dispatch = useDispatch();

  return (
   <>
    <h3> {movie.title}</h3>
    <h5>{movie.original_title}</h5>
    <p>{movie.overview}</p>
    <button onClick={() => dispatch(insertMovie(movie ))}>Add to playlist</button>
    <p></p>
    </>
    
  )
};

