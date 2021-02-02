import React, { useReducer, useEffect } from "react";
import './App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
}



const App = ()  =>{


  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(res => res.json())
      .then(jsonResponse => {
        setMovies(console.log(jsonResponse.Search))
        setLoading(false)
      })
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => res.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search)
          setLoading(false)
        }
        else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })

  }

  return (
    <div className="App">
      <Header text="Header" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {
          loading && !errorMessage ?
            <span>Loading...</span> : errorMessage ?
              (<div className="errorMessage">{errorMessage}</div>) :

              (movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
              )

              ))
        }
      </div>
    </div>
  );
}

export default App;
