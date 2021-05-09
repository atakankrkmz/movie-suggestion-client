import React, { Component } from "react";
/* Dependencies */
// import env from "react-dotenv";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Figure, Row, Col } from "react-bootstrap";
/* Components */
import Comments from "../../Comment/Comments.jsx";
import AddComment from "../../Comment/AddComment.jsx";

const API_URL = process.env.REACT_APP_API_URL;

export default class MovieDetailpage extends Component {
  _isMounted = false;
  constructor(...props) {
    super(...props);

    this.state = {
      movie: {},
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${API_URL}api/Movies/getbyid?id=${this.props.match.params.id}`)
      .then((res) => this.setState({ movie: res.data }))
      .catch((err) => console.log(err));
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { name, description, poster } = this.state.movie;
    return (
      <div>
        <Row>
          <Col md="4" className="mx-3">
            <Figure>
              <Figure.Image
                width={250}
                alt="Movie Poster Image"
                src={
                  poster
                    ? `${API_URL}uploads/moviecontent/posters/${poster}`
                    : null
                }
              />
            </Figure>
          </Col>
          <Col md="7">
            <h3> {name}</h3>
            <br />
            <p>{description}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="mx-5">
            <Comments key={uuidv4()} movieid={this.props.match.params.id} />
            <AddComment key={uuidv4()} movieid={this.props.match.params.id} />
          </Col>
        </Row>
      </div>
    );
  }
}
