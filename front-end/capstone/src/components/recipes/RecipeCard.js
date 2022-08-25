import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../elements/Ratings";
import YouTubeLink from "../elements/YouTubeLink";
import RecipeFull from "../recipeFull/RecipeFull";
import RecipesInstruction from "./RecipesInstruction";

const RecipeCard = ({ recipe }) => {
  console.log(recipe.instructions[0].instruction);

  return (
    <article className="bg-blue-200 flex-col ">
      <h2>{recipe.name}</h2>
      <img className="w-48" src={recipe.image} alt={recipe.name} />
      {/* <RecipesInstruction instructions={recipe.instructions} /> */}
      <Ratings rating={parseInt(recipe.rating)} />
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Prep time: {recipe.prepTime}</p>
      <Link to="/recipies" recipe={recipe}>
        To see
      </Link>
      <YouTubeLink videoLink={recipe.video} title={recipe.name} />
    </article>
  );
};

export default RecipeCard;