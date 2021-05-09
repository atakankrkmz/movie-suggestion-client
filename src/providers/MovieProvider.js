import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const API_URL = process.env.REACT_APP_API_URL;

export class MovieProvider extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(`${API_URL}api/Movies/getall`);
    this.setState({
      movies: response.data,
    });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
const MoviesConsumer = Context.Consumer;
export default MoviesConsumer;
