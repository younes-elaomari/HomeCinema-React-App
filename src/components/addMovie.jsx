import React from "react";
import Form from "./commen/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fackeMovieService";

class AddMovie extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  componentDidMount = () => {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "add-movie") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.getMovieData(movie) });
  };

  doSubmit = (movie) => {
    this.props.history.push("/movies");
    saveMovie(movie);
  };

  getMovieData = (movie) => {
    return {
      id: movie.id,
      title: movie.title,
      genreId: movie.genre.id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  schema = {
    id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("DailyRentalRate"),
    numberInStock: Joi.number().required().min(0).label("Number in Stock"),
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genreId", "Genre")}
        {this.renderInput("numberInStock", "Number In Stock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderBtn("Submite")}
      </form>
    );
  }
}

export default AddMovie;
