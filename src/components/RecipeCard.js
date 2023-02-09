import axios from 'axios'
import React, { useCallback, useState } from 'react'
import PopUp from './PopUp'
import UserForm from './UserForm'

function RecipeCard(props) {
  // const {image, title, time, recipe_url, servings} = props.recipe;
  const [recipe, setRecipe] = useState(props.recipe);
  
  return (
    <div>RecipeCard
      <br/>
      <img className="recipe-img" src={recipe.image} alt="food dish"/>
      <h2>{recipe.title}</h2>
      <p>plate or fork image {recipe.servings}</p>
      <p>clock image {recipe.time}</p>

    </div>
  )
}

export default RecipeCard