import { Switch, Route } from "react-router";
import CategorySelectView from "./word4word/CategorySelectView";

function TriviaView() {
  //trivia screen should have a picture on top half of the sceen and a question at the bottom half
  //trivia screen should contain its own switch to the different parts of activiy
  //each screen can be split into two components. one for the image at the top the other for the question or text at the bottom.

  return (
    <div>
      <Switch>
        <Route path="/word4word/newgame">
          <p>new game screen here</p>
          <CategorySelectView />
        </Route>
        <Route path="/word4word/:category">
          <p>new game screen here</p>
          <CategorySelectView />
        </Route>
        <Route exact={true} path="/word4word">
          <p>homelyness</p>
        </Route>
      </Switch>
      <p>Testing</p>
    </div>
  );
}

export default TriviaView;
