import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import SubComments from "./SubComments.jsx";

export default class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            movieId: this.props.movieid,
        };
    }
    componentDidMount = async () => {
        await axios
            .get(
                `https://localhost:5001/api/Comments/getbymovieid?id=${this.state.movieId}`
            )
            .then((res) => {
                this.setState({
                    comments: res.data,
                });
            })
            .catch((err) => console.log(err));
    };
    render() {
        let commentArray = this.state.comments;
        return (
            <div>
                {commentArray.map((comment) => {
                    if (comment.subCommentOf === 0) {
                        return (
                            <div key={uuidv4()}>
                                <Card className="m-2" key={comment.id}>
                                    <Card.Header>
                                        {comment.username}
                                    </Card.Header>
                                    <Card.Body>
                                        <p>{comment.text}</p>
                                    </Card.Body>
                                    <SubComments
                                        commentId={comment.id}
                                        movieId={this.state.movieId}
                                    />
                                </Card>
                            </div>
                        );
                    }
                    return <div></div>;
                })}
            </div>
        );
    }
}
