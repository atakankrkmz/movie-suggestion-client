import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";

export default class DirectorForHomepage extends Component {
  render() {
    return (
      <Card className="mb-4 mx-2">
        <Image
          className="rounded mx-auto  d-block"
          width={150}
          src={`https://localhost:44368/uploads/directorcontent/posters/${this.props.director.portre}`}
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
