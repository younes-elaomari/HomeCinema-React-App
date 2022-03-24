import React from "react";

const ListGroup = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre.id}
          onClick={() => onGenreSelect(genre)}
          className={
            selectedGenre === genre
              ? "list-group-item clickable active"
              : "list-group-item clickable"
          }
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
