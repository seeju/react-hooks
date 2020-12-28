import { useState, useEffect } from 'react';
import { MoviesService } from "../api/MoviesService";


export const useDetails = (id) => {
    const [movie, setMovie] = useState ([])

    useEffect(() => {
        if(!id)
          return;
        MoviesService.getMovieById(id)
          .then((res) => setMovie(res.data))
      }, []);

    return movie;
    
}
  