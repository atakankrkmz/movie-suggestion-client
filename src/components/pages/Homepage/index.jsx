import React from "react";
import { Col, Row } from "react-bootstrap";
import Movies from "../../Movie/Movies.js";
import Secondarybar from "../../ui/Secondarybar.js";

/* Providers */
import { MovieProvider } from "../../../providers/MovieProvider.js";

export default function Homepage() {
    return (
        <Row>
            <Col md="10">
                <MovieProvider>
                    <Movies />
                </MovieProvider>
            </Col>
            <Col md="2">
                <Secondarybar />
            </Col>
        </Row>
    );
}
