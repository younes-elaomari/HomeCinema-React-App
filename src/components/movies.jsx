import React, { Component } from "react";
import _ from "lodash";

import { getMovies, deleteMovie } from "../services/fackeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Paginate } from "../utils/paginate";

import Header from "./header";
import MoviesCount from "./moviesCount";
import MoviesTable from "./moviesTable";
import Pagination from "./commen/pagination";
import ListGroup from "./commen/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColomn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  componentDidMount = () => {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  };

  handleSort = (sortColomn) => {
    this.setState({ sortColomn });
  };

  handleGenreSelect = (genre) => {
    console.log("test");
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    deleteMovie(movie);
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      selectedGenre,
      pageSize,
      currentPage,
      sortColomn,
      searchQuery,
    } = this.state;

    let filtered = allMovies;

    if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((g) => g.genre.name === selectedGenre.name);
    } else if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const sorted = _.orderBy(filtered, [sortColomn.path], [sortColomn.order]);

    const movies = Paginate(sorted, pageSize, currentPage);

    return { movies, totlaleCount: filtered.length };
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, selectedGenre: null });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      selectedGenre,
      pageSize,
      currentPage,
      sortColomn,
      searchQuery,
    } = this.state;

    const { movies, totlaleCount } = this.getPagedData();

    if (allMovies.length === 0)
      return <h5>There are no movies in the database</h5>;

    return (
      <React.Fragment>
        <Header />
        <MoviesCount
          totlaleCount={totlaleCount}
          searchQuery={searchQuery}
          onSearch={this.handleSearch}
        />
        <div className="bg-light">
          <div className="movies ">
            <div className="container py-5">
              <ListGroup
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreSelect={this.handleGenreSelect}
              />
              <MoviesTable
                movies={movies}
                user={this.props.user}
                sortColomn={sortColomn}
                onSort={this.handleSort}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
              />
              <Pagination
                count={totlaleCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
