import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL;

export default class DirectorForHomepage extends Component {
  render() {
    return (
      <Card className="mb-4 mx-2">
        <Image
          className="rounded mx-auto  d-block"
          width={150}
          src={`${API_URL}uploads/directorcontent/posters/${this.props.director.portre}`}
          roundedCircle
        />

        <Card.Title className="text-center mb-2">
          <Link to={`/director/${this.props.director.id}`}>
            {this.props.director.name}
          </Link>
        </Card.Title>
      </Card>
    );
  }
}
