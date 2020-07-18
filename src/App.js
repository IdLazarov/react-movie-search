import React from 'react';
import MovieSearch from './MovieSearch/MovieSearch'
import './App.css';

function App(){
  return(
    <div className="container">
        <h1 className="title">React movie search</h1>
        <MovieSearch />
    </div>
  )
}


export default App;
