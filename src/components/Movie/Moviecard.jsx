import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
const MoviecardInterface = createContext(null);

const Moviecard = ({
  movie: { id, name, description, releaseDate, poster },
  genre,
  language,
  children,
}) => {
  return (
    <MoviecardInterface.Provider
      value={{ id, name, description, releaseDate, poster, genre, language }}
    >
      {children}
    </MoviecardInterface.Provider>
  );
};

const Container = ({ children }) => {
  const context = useContext(MoviecardInterface);
  const { id, poster } = context;
  return (
    <li
      className="booking-card"
      style={{
        backgroundImage: `url(${API_URL}uploads/moviecontent/posters/${poster})`,
      }}
    >
      <div className={"book-container"}>
        <div className={"content"}>
          <Link to={`movie/${id}`}>
            <button className={"btn"}>Devamını Gör</button>
          </Link>
        </div>
      </div>
      <div className={"informations-container"}>{children}</div>
    </li>
  );
};

const Title = () => {
  const context = useContext(MoviecardInterface);
  const { name } = context;

  if (!context) {
    throw new Error("Title should be called from Moviecard component");
  }

  return <h2 className={"title"}>{name}</h2>;
};

const Subtitle = () => {
  const context = useContext(MoviecardInterface);

  if (!context) {
    throw new Error("Subtitle should be called from Moviecard component");
  }

  return <p className={"sub-title"}></p>;
};

const Information = () => {
  const context = useContext(MoviecardInterface);
  const { description, genre, language, releaseDate } = context;
  return (
    <div className={"more-information"}>
      <div className={"info-and-date-container"}>
        <div className={"box info"}>
          <svg
            className={"icon"}
            style={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
            />
          </svg>
          <p>{genre}</p>
        </div>
        <div className="box date">
          <svg
            className="icon"
            style={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
            />
          </svg>
          <p>{releaseDate.substring(0, 4)}</p>
        </div>
        <div className="box date" style={{ marginLeft: 10 }}>
          <svg
            className="icon"
            style={{ width: 24, height: 24 }}
            viewBox="0 0 16 16"
          >
            {/* <path
              fill="currentColor"
              d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"
            /> */}
            <path
              fill="tomato"
              d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
            />
            <path
              fill="tomato"
              d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
            />
          </svg>
          <p style={{ color: "tomato" }}>{language}</p>
        </div>
      </div>
      <p className="disclaimer">{description.substring(0, 100)}</p>
    </div>
  );
};

export { Moviecard, Container, Title, Subtitle, Information };
