import React, { Component } from "react";
import Navigation from "./components/navigation";
import Movies from "./components/movies";
import AddMovie from "./components/addMovie";
import notFound from "./components/commen/notFound";
// import _ from "lodash";
// import ProductDetails from "./components/commen/productDetails";

import { getMovies } from "./services/fackeMovieService";

import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    // const { movies } = this.state;

    return (
      <main>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/movies/:id" component={AddMovie} />
            <Route path="/movies" component={Movies} />
            <Route path="/add-movie" component={AddMovie} />
            {/* <Route path="/not-found" component={notFound} /> */}
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
