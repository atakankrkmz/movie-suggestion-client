import React, { Component } from "react";
import Movie from "./Movie.js";
import MoviesConsumer from "../../providers/MovieProvider.js";
import axios from "axios";
import "./Movie.css";

const API_URL = process.env.REACT_APP_API_URL;

class Movies extends Component {
  state = {
    genres: [],
  };

  componentDidMount = async () => {
    var response = await axios.get(`${API_URL}api/Genres/getall`);

    let arrayState = [];

    response.data.forEach((genre) => {
      //console.log(genre);
      // console.log("model " + model);
      arrayState.push({ id: genre.id, genreName: genre.genreName });
    });

    this.setState({
      genres: arrayState,
    });
  };

  render() {
    // getting genre table from state
    let genreArray = this.state.genres;

    return (
      <MoviesConsumer>
        {(value) => {
          const { movies } = value;
          return (
            <div id="wrapper">
              {movies.map((movie) => {
                // define variable for genreNameForProp() function
                let gnrnm = "";

                // change gnrm variable with current movie's genreName
                const genreNameForProp = () => {
                  genreArray.map((x) =>
                    x.id === movie.genreId ? (gnrnm = x.genreName) : null
                  );
                };

                //run genreNameForProp() function
                genreNameForProp();

                return (
                  <ul>
                    {" "}
                    <Movie key={movie.id} movie={movie} genre={gnrnm} />{" "}
                  </ul>
                );
              })}
            </div>
          );
        }}
      </MoviesConsumer>
    );
  }
}
export default Movies;
