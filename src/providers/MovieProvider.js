import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class MovieProvider extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://localhost:5001/api/Movies/getall"
    );
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
