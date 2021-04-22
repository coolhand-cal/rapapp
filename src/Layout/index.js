import React from "react";
import { Switch, Route } from "react-router";
import ActivityListView from "../views/ActivityListView";
import TriviaView from "../views/triviaView";

function Layout() {
  return (
    <div className="app">
      <h1>header here</h1>
      <Switch>
        <Route path="/word4word/">
          <h2>Game Time</h2>
          <TriviaView />
        </Route>
        <Route exact={true} path="/">
          <div className="container">
            <h2>Its the home page babie</h2>
            <p></p>
            <ActivityListView />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
