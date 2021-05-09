import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import SubComments from "./SubComments.jsx";

const API_URL = process.env.REACT_APP_API_URL;

export default class Comments extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      movieId: this.props.movieid,
    };
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  };
  componentDidMount = async () => {
    this._isMounted = true;
    await axios
      .get(`${API_URL}api/Comments/getbymovieid?id=${this.state.movieId}`)
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
                <Card className="m-2">
                  <Card.Header>{comment.username}</Card.Header>
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
          return <div key={uuidv4()}></div>;
        })}
      </div>
    );
  }
}
