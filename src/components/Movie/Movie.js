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
    const { genre } = this.props;

    return (
      <Moviecard movie={this.props.movie} genre={genre}>
        <Container>
          <Title />
          <Subtitle />
          <Information />
        </Container>
      </Moviecard>
    );
  }
}
/* 
      <Card
        style={{
          marginBottom: 25,
          marginRight: 10,
          backgroundImage: `url(${API_URL}uploads/moviecontent/posters/${poster})`,
        }}
        className="customcard text-white card-has-bg click-col"
      >
        <Card.Img
          className={"card-img d-none"}
          variant="top"
          src={`${API_URL}uploads/moviecontent/posters/${poster}`}
        />
        <Col classname={"card-img-overlay d-flex flex-column"}>
          <Card.Body className={"card-body"}>
            <small class="card-meta mb-2">Thought Leadership</small>
            <h4 class="card-title mt-0 ">
              <a class="text-white" herf="#">
                Goverment Lorem Ipsum Sit Amet Consectetur dipisi?
              </a>
            </h4>
            <small>
              <i className="far fa-clock"></i> October 15, 2020
            </small>
          </Card.Body>
          <Card.Footer className={"card-footer"}>
            <div className={"media"}>
              <Card.Img
                className={"mr-3 rounded-circle"}
                src={`https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png`}
                alt={"director portre"}
                style={{ maxWidth: 50 }}
              />
              <div className={"media-body"}>
                <h6 className="my-0 text-white d-block">Oz COruhlu</h6>
                <small>Director of UI/UX</small>
              </div>
            </div>
          </Card.Footer>
        </Col>
      </Card>
*/
