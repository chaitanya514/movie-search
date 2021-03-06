import React from "react";
import "./App.css";
const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

const Movie = ({ movie }) => {

    const poster = movie.Poster === "" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (

        <div className="movie">
            <div>
    <h3>{movie.Title}</h3>
            </div>

            <div className="movie-poster">
                <img
                    src={poster}
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}

                />
            </div>
            <p>({movie.Year})</p>
        </div>
    )
}

export default Movie;