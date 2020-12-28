import { useState, useEffect } from 'react';
import { MoviesService } from "../api/MoviesService";

export const useMovies = () => {
    const [movies, setMovies] = useState ([])

    useEffect(() => {
        MoviesService.getPopularMovies()
          .then((res) => setMovies(res))
      }, []);

    return movies;
    
}