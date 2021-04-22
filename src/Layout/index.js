import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import ActivityListView from "../views/ActivityListView";
import TriviaView from "../views/triviaView";

function Layout() {
  return (
    <div className="app">
      <h1>Rap App</h1>
      <p>
        This is a skeleton just to have placement for the different screens and
        actions visuals will be added on top
      </p>
      <Switch>
        <Route path="/word4word/">
          <h2>Word 4 Word</h2>
          <TriviaView />
        </Route>
        <Route path="/whatsgood/">
          <h2>Whats Good</h2>
          <p>Whats good screen will go here</p>
        </Route>
        <Route path="/hitmeup/">
          <h2>Hit me up</h2>
          <p>Hit me up screen will go here</p>
        </Route>
        <Route exact={true} path="/">
          <div className="container">
            <h2>Home Page Here</h2>
            <p>
              This Screen will have a list of the diffennt activities available
            </p>
            <ActivityListView />
          </div>
        </Route>
      </Switch>
      <Link to="/">Go home </Link>
    </div>
  );
}

export default Layout;
