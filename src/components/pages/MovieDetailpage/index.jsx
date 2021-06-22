/* Dependencies */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Figure, Row, Col } from "react-bootstrap";
/* Components */
import Comments from "../../Comment/Comments.jsx";
import AddComment from "../../Comment/AddComment.jsx";
import { useParams } from "react-router";

const API_URL = process.env.REACT_APP_API_URL;

const MovieDetailpage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}api/Movies/getbyid?id=${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  let { name, description, poster } = movie;
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
          <Comments key={uuidv4()} movieid={id} />
          <AddComment key={uuidv4()} movieid={id} />
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailpage;
