import React, { Component } from "react";

import Navigation from "./components/navigation";
import Movies from "./components/movies";
import AddMovie from "./components/addMovie";
import Deitails from "./components/deitails";
import notFound from "./components/commen/notFound";

import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <Switch>
          <Route path="/movies/deitails" component={Deitails} />
          <Route path="/movies/:id" component={AddMovie} />
          <Route path="/movies" component={Movies} />
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/not-found" component={notFound} />
          <Redirect from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
