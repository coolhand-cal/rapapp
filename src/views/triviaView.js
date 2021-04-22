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
          <p>category selection will go here</p>
          <CategorySelectView />
        </Route>
        <Route path="/word4word/:category/0">
          <p>
            Alright this is the kick off The trivia itself will take place here
          </p>
        </Route>
        <Route path="/word4word/:category/:questionId">
          <p>woah baby</p>
        </Route>
        <Route exact={true} path="/word4word">
          <p>homelyness</p>
          <CategorySelectView />
        </Route>
      </Switch>
    </div>
  );
}

export default TriviaView;
