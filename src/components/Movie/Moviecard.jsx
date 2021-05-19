import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;
const MoviecardInterface = createContext(null);

const Moviecard = ({
  movie: { id, name, description, releaseDate, poster },
  genre,
  children,
}) => {
  return (
    <MoviecardInterface.Provider
      value={{ id, name, description, releaseDate, poster, genre }}
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
  const { description, genre, releaseDate } = context;
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
              d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
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
      </div>
      <p className="disclaimer">{description.substring(0, 100)}</p>
    </div>
  );
};

export { Moviecard, Container, Title, Subtitle, Information };
