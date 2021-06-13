import React, { useEffect, useState } from "react";
import Movie from "./Movie.js";
import MoviesConsumer from "../../providers/MovieProvider.js";
import axios from "axios";
import "./Movie.css";

const API_URL = process.env.REACT_APP_API_URL;

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguage] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}api/Genres/getall`).then((res) => setGenres(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}api/Languages/getall`)
      .then((res) => setLanguage(res.data));
  }, []);

  return (
    <MoviesConsumer>
      {(value) => {
        const { movies } = value;
        return (
          <div id="wrapper">
            {movies.map((movie) => {
              // define variable for genreNameForProp() function
              let gnrnm = "";
              let lngnm = "";

              // change gnrm variable with current movie's genreName
              const genreNameForProp = () => {
                genres.map((x) =>
                  x.id === movie.genreId ? (gnrnm = x.genreName) : null
                );
              };

              const languageNameForProp = () => {
                languages.map((x) =>
                  x.id === movie.languageId ? (lngnm = x.name) : null
                );
              };

              //run genreNameForProp() function
              genreNameForProp();
              languageNameForProp();

              return (
                <ul key={movie.id}>
                  {" "}
                  <Movie movie={movie} genre={gnrnm} language={lngnm} />{" "}
                </ul>
              );
            })}
          </div>
        );
      }}
    </MoviesConsumer>
  );
};
export default Movies;
