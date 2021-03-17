import axios from "axios";
import React, { Component } from "react";
import Comments from "../../Comment/Comments.jsx";
import AddComment from "../../Comment/AddComment.jsx"
import {v4 as uuidv4} from "uuid"

export default class MovieDetailpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
        };
    }

    componentDidMount = async () => {
        await axios
            .get(
                `https://localhost:5001/api/Movies/getbyid?id=${this.props.match.params.id}`
            )
            .then((response) => {
                this.setState({
                    movie: response.data,
                });
            })
            .catch((err) => console.log(err));
    };
    render() {
        const { name, description } = this.state.movie;
        return (
            <div>
                <h3> {name}</h3>
                <br />
                <p>{description}</p>
                <br />
                <Comments movieid={this.props.match.params.id} />

                <AddComment key={uuidv4} movieid={this.props.match.params.id}/>
            </div>
        );
    }
}
