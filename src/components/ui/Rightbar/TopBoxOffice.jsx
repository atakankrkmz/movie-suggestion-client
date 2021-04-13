import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TopBoxOffice extends Component {
    state = {
        movies: [],
    };

    componentDidMount = async () => {
        await axios
            .get("https://localhost:44368/api/Movies/getlastmovies?count=5")
            .then((res) => {
                this.setState({
                    movies: res.data,
                });
            })
            .catch((err) => console.log(err));
    };

    render() {
        const { movies } = this.state;

        return (
            <div>
                <h3>En çok gişe yapanlar</h3>
                <ol>
                    {movies.map((mv) => {
                        return (
                            <li key={mv.id}>
                                <Link to={`/movie/${mv.id}`}>{mv.name}</Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}
export default TopBoxOffice;
