import React from "react";


const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

const Movie = ({ movie }) => {

    const poster = movie.poster === "" ? DEFAULT_PLACEHOLDER_IMAGE : movie.poster;
    return (

        <div className="movie">
            <div>
                <h3>This place reserved for title</h3>
            </div>

            <div>
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