import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {Movie} from "./components/Movie/Movie";
import {movies} from "./movies";

import camera from './img/camera.svg';

const App = () => (
  <>
    <h1>
      <img className="logo" src={camera} alt="Logo" />
      V našem kině právě uvádíme
    </h1>
    <div className="movies">
      { movies.map(movie => <Movie title={movie.title} year={movie.year}     genre={movie.genre} director={movie.director} rating={movie.rating} poster={movie.poster} cast={movie.cast} />)}
  </div>
  </>
);

render(<App />, document.querySelector('#app'));
