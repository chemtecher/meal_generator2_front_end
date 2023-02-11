import React from 'react'
import FavoritesBtn from './FavoritesBtn'
import RecipeCard from './RecipeCard'

function RecipeList(props) {
  const {recipeData} = props
  const recipeList = recipeData.map(recipe => {
    console.log(recipe)
    return(
      <div>
      <FavoritesBtn recipe={recipe}/>
      <RecipeCard
            key={recipe.recipe_id}
            // passing the entire prop object (recipe from .map()) 
            // to an instance of the Recipe component
            recipe={recipe}
        />
      </div>
       
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