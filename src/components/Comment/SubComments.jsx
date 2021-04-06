import React, { Component } from "react";
/* Dependencies */
import axios from "axios";
/* Components */
import SubComment from "./SubComment.jsx";
import AddComment from "./AddComment.jsx";

export default class SubComments extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            subComments: [],
        };
    }
    componentDidMount = async () => {
        this._isMounted = true;

        await axios
            .get(
                `https://localhost:44368/api/Comments/getbysubid?id=${this.props.commentId}`
            )
            .then((res) => {
                if (this._isMounted) {
                    this.setState({ subComments: res.data });
                }
            })
            .catch((err) => console.log(err));
    };
    componentWillUnmount = () => {
        this._isMounted = false;
    };
    render() {
        const comArray = this.state.subComments;
        return (
            <div className="ml-5">
                {comArray.length > 0 ? (
                    <div>
                        <SubComment  comments={comArray} />

                        <AddComment
                            movieId={this.props.movieId}
                            commentId={this.props.commentId}
                        />
                    </div>
                ) : (
                    <AddComment
                        movieId={this.props.movieId}
                        commentId={this.props.commentId}
                    />
                )}
            </div>
        );
    }
}
