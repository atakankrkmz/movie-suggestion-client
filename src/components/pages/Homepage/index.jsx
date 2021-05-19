import React from "react";
import { Col, Row } from "react-bootstrap";
import Movies from "../../Movie/Movies.js";
import Secondarybar from "../../ui/Secondarybar.js";
import DirectorsForHomepage from "../../Director/DirectorsForHomepage.jsx";

/* Providers */
import { MovieProvider } from "../../../providers/MovieProvider.js";

export default function Homepage() {
  return (
    <Row>
      <Col lg="9">
        <MovieProvider>
          <Movies />
        </MovieProvider>
        <hr />
        <DirectorsForHomepage />
      </Col>
      <Col lg="3">
        <Secondarybar />
      </Col>
    </Row>
  );
}
