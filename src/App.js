import React from "react";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { MovieDetails } from "./components/MovieDetails";
import { Playlist } from "./components/Playlist";
import { NavigationBar } from "./components/NavigationBar";


export default function App() {
  return (

    <>
      <BrowserRouter>
      <NavigationBar />  

        <Switch>
          <Route exact path="/"><MoviesList /></Route>

          <Route path="/movie/:id" component={MovieDetails} ></Route>

          <Route path="/playlist" component={Playlist} ></Route>

        </Switch>

      </BrowserRouter>
    </>
  );
}

