import React, { useState } from "react"
import MovieForm from "../MovieSearch/MovieForm"
import "../App.css"

function MovieSearch() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const movieSearch = async (e) => {
        e.preventDefault();
        console.log("submitting");


        const url = `https://api.themoviedb.org/3/search/movie?api_key=08164f704bad0945c136a8b453b9c68d&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url)
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }

    }


    return (
        <div>
            <form className="form" onSubmit={movieSearch}>
                <label htmlFor="query" className="label">Movie name</label>
                <input type="text"
                    className="input"
                    name="query"
                    value={query}
                    placeholder="Choose a movie"
                    onChange={(e) => { setQuery(e.target.value) }} />
                <button className="button" type="submit">Search</button>
            </form>
            
            <div className="card--list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieForm movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default MovieSearch