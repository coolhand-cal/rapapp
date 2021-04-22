import React from "react";
import { Link } from "react-router-dom";

function CategorySelectView() {
  /*
TODO: Update this component so that it can be reused for sub categories as well
*/
  //declare constants
  const category1 = "theCat";
  const category2 = "theDog";
  const category3 = "theMouse";
  const categories = [];

  //load data mock data for now
  categories.push(category1, category2, category3);

  //function to display individual category
  const DisplayCategory = (category) => {
    const location = `/word4word/${category}/0`;
    return <Link to={location}>{category} </Link>;
  };

  //function to map category array to category components.
  const CategoryList = () => {
    return categories.map(DisplayCategory);
  };

  //return view for this component.
  return (
    <div>
      <h3>Categories below</h3>
      <CategoryList />
    </div>
  );
}

export default CategorySelectView;
