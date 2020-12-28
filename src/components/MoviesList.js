import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useMovies } from "../hooks/useMovies";


export const MoviesList = () => {
 const movies = useMovies();


  return (
    <>
      <h1>Popular Films</h1>
      <ul>
        {movies?.data?.results?.map((m, index) => (
          <li>
          <Link to={`/movie/${m?.id}`}>
            {m.title}
          </Link>
          </li>
       ))}
      </ul>
    </>
  );
};

