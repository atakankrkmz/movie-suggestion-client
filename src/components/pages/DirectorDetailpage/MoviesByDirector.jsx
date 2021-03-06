import React, { Component } from "react";
import Movie from "../../Movie/Movie";
import axios from "axios";
import "./DirectorDetail.css";

const API_URL = process.env.REACT_APP_API_URL;

export default class MoviesByDirector extends Component {
  _isMounted = false;
  constructor(...props) {
    super(...props);

    this.genreNameForProp = this.genreNameForProp.bind(this);

    this.state = {
      movies: [],
      genres: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get(
        `${API_URL}api/Movies/getbydirector?director_id=${this.props.match.params.id}`
      )
      .then((res) => this.setState({ movies: res.data }))
      .catch((err) => console.log(err));

    await axios
      .get(`${API_URL}api/Genres/getall`)
      .then((res) => this.setState({ genres: res.data }))
      .catch((err) => console.log(err));
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  genreNameForProp(movie) {
    let genreArray = this.state.genres;
    let gnrnm = "";
    genreArray.map((x) =>
      x.id === movie.genreId ? (gnrnm = x.genreName) : null
    );
    return gnrnm;
  }
  render() {
    return (
      <div id="wrapper">
        {this.state.movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              genre={this.genreNameForProp(movie)}
            />
          );
        })}
      </div>
    );
  }
}
