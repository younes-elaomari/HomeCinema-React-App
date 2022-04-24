import React from "react";
import { Link } from "react-router-dom";

const ListGroup = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <ul className="nav nav-pills pb-3">
      {genres.map((genre) => (
        <li key={genre._id} className="nav-item">
          <Link
            to="/movies"
            onClick={() => onGenreSelect(genre)}
            className={
              selectedGenre === genre
                ? "nav-link clickable active"
                : "nav-link clickable"
            }
          >
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
