import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Movie.css";

export default class Movie extends Component {
  render() {
    const { id, name, description, releaseDate, poster } = this.props.movie;
    const { genre } = this.props;

    return (
      <Card className="m-3 p-2">
        <Row>
          <Col md={6}>
            <Card.Img
              style={{ height: "95% !important", width: "95% !important" }}
              variant="top"
              src={`https://localhost:5001/uploads/moviecontent/posters/${poster}`}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Link to={`/movie/${id}`}>
                <Card.Title style={{fontSize:"4vh"}}>{name}</Card.Title>{" "}
              </Link>

              <Card.Text style={{fontSize:"2vh"}}>{description.substring(0, 350) + "..."}</Card.Text>
              <Link to={`/movie/${id}`}>
                <Card.Text className="muted">Devamını gör</Card.Text>
              </Link>
              <Card.Text className="text-muted">
                {genre} | {releaseDate.substring(0, 10)}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }
}
