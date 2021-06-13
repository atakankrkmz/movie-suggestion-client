import React, { Component } from "react";
import "./Movie.css";
import "./CustomCard.css";
import {
  Container,
  Information,
  Moviecard,
  Title,
  Subtitle,
} from "./Moviecard";

export default class Movie extends Component {
  render() {
    const { genre, language } = this.props;

    return (
      <Moviecard movie={this.props.movie} genre={genre} language={language}>
        <Container>
          <Title />
          <Subtitle />
          <Information />
        </Container>
      </Moviecard>
    );
  }
}
