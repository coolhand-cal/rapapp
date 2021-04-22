import React from "react";
import { Link } from "react-router-dom";

function ActivityListView() {
  //creating some temporary data  to use
  const activities = [];
  const activity1 = {
    name: "word4word",
    location: "/word4word/newgame",
  };
  const activity2 = {
    name: "whats Good",
    location: "",
  };
  activities.push(activity1, activity2);

  //function to display individual activity will take an activity and return an activity component
  const DisplayActivty = (activity) => {
    //each activity will display as a link for now
    //wish to change to a card type view will move to own file and develop
    return <Link to={activity.location}>{activity.name} </Link>;
  };

  //function to map through array of activities and display each one
  const ActivityList = () => {
    if (activities.length > 0) return activities.map(DisplayActivty);
    else return "loading";
  };

  //return the view for this component
  return (
    <div className="container">
      <h3>Activity List Below</h3>
      <ActivityList />
    </div>
  );
}

export default ActivityListView;
