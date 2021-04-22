import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Layout from "./Layout";

function App() {
  return (
    <div className="app-routes">
      <Route path="/">
        <Layout />
      </Route>
    </div>
  );
}

export default App;
