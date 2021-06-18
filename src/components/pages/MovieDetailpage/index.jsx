import React, { useEffect, useState } from "react";
/* Dependencies */
// import env from "react-dotenv";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Figure, Row, Col } from "react-bootstrap";
/* Components */
import Comments from "../../Comment/Comments.jsx";
import AddComment from "../../Comment/AddComment.jsx";
import { useParams } from "react-router";

const API_URL = process.env.REACT_APP_API_URL;

const MovieDetailpage = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");

  const { id } = useParams();

  const implementLanguage = (languageId, languages) =>
    languages.map((language) =>
      language.id === languageId ? setLanguage(language.name) : null
    );

  const implementGenre = (genreId, genres) =>
    genres.map((genre) =>
      genre.id === genreId ? setGenre(genre.genreName) : null
    );

  useEffect(() => {
    axios
      .get(`${API_URL}api/Genres/getall`)
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}api/Languages/getall`)
      .then((res) => {
        setLanguages(res.data);
        let languagejjj = "";
        res.data.forEach((item) => {
          if (item.id === movie.languageId) {
            languagejjj = item.name;
            console.log(languagejjj);
          }
        });
        console.log();
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}api/Movies/getbyid?id=${id}`)
      .then((res) => {
        setMovie(res.data);
        implementGenre(res.data.genreId, genres);
        implementLanguage(res.data.languageId, languages);
        console.log(genres);
        console.log(languages);
      })
      .catch((err) => console.log(err));
  }, []);

  let { name, description, poster, releaseDate } = movie;
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
          <h3>
            {" "}
            {releaseDate ? releaseDate.substring(0, 4) : 0}| {genre} |{" "}
            {language}
          </h3>
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
