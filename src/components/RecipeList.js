import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList() {
  // const {image, title, time, recipe_url, servings} = props

  const recipeList = recipeData.map(recipe => {
    console.log(recipe)
    return(
        <RecipeCard
            key={recipe.recipe_id}
            // passing the entire prop object (recipe from .map()) 
            // to an instance of the Recipe component
            recipe={recipe}
        />
    )
  })


  return (
    <div>
      <h3>We found {recipeList.length} Recipes for You:</h3>
      {recipeList}
      
    </div>
  )
}

export default RecipeList