import React from "react";
import { useParams } from "react-router-dom";
import Ratings from "../elements/Ratings";
import RecipesIngredients from "../recipes/RecipeIngredients";
import RecipesInstruction from "../recipes/RecipesInstruction";
import YouTubeLink from "../elements/YouTubeLink";
import RatingForm from "../elements/RatingForm";

const RecipeFull = ({ recipes, getAllRecipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((currentRecipe) => currentRecipe.id == id);

  if (!recipe) {
    return "Recipe not found";
  }

  return (
    <main className="bg-green-100">
      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="flex items-center justify-center">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="max-w-md rounded"
          />
        </div>
        <div className="p-4">
          <h1 className="text-center">{recipe.name}</h1>
          <Ratings recipe={recipe} />
          <p>
            <span className="font-bold">Type of Drink:</span> {recipe.type}
          </p>
          <p>
            <span className="font-bold">Difficulty:</span> {recipe.difficulty}
          </p>
          <p>
            <span className="font-bold">Prep Time: </span>
            {recipe.prepTime} minutes
          </p>
          <p>
            <YouTubeLink videoLink={recipe.video} title={recipe.name} />
          </p>
          <p>
            <span className="font-bold">Ingredients:</span>
            <RecipesIngredients ingredients={recipe.ingredients} />
          </p>
          <p>
            <span className="font-bold">Instructions:</span>
            <RecipesInstruction instructions={recipe.instructions} />
          </p>
          <p>
            <RatingForm recipes={recipes} getAllRecipes={getAllRecipes} />
          </p>
        </div>
      </div>
    </main>
  );
};

export default RecipeFull;
