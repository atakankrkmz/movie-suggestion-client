import React, { Component } from "react";
import axios from "axios";

class Secondarybar extends Component {
    state = {
        movies: [],
    };

    componentDidMount = async () => {
        await axios
            .get("https://localhost:5001/api/Movies/getlastmovies?count=5")
            .then((movies) => {
                this.setState({
                    movies,
                });
            })
            .catch((err) => console.log(err));
    };
    render() {
        const {movies} = this.state;
        return (
            <div>
                <h3>Son çıkanlar</h3>
                {movies.map((movie) => {
                    movie !== null ? <p>{movie.name}</p>: null
                })}
            </div>
        );
    }
}
export default Secondarybar;
