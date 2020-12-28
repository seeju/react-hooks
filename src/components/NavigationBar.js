import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  
    return(
        <>
        <Link to="/">Home</Link>
        <p></p>
        <Link to="/playlist">Playlist</Link>
        </>
        )
}