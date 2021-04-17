import React from "react";
import { Col, Row } from "react-bootstrap";
import Secondarybar from "../../ui/Secondarybar.js";

import MoviesByDirector from "./MoviesByDirector.jsx";

export default function DirectorDetail() {
  return (
    <Row>
      <Col md="10">
        <MoviesByDirector />
      </Col>
      <Col md="2">
        <Secondarybar />
      </Col>
    </Row>
  );
}
