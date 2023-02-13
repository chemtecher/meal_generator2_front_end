import React from 'react'
import axios from 'axios';

function SavRecipeCard(props) {
  const {image, title, time, recipe_url, servings, recipe_id} = props.favRecipe;
  
  // const removeFromFav = () => {
  //   try {
  //     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/search_recipes/remove/${recipe_id}`);
  //     console.log("Recipe removed from saved")
  //     // getSavedRecipes()

  //   } 
  //   catch (error) {
  //     console.log(error)
  //   }
  // }
  
  return (
    <div>
      SavRecipeCard
      <br />
      <img className="recipe-img" src={image} alt="food dish" />
      <h2>{title}</h2>
      <p>plate or fork image {servings} servings</p>
      <p>clock image {time} mins</p>
      <button
          onClick={() => {
          props.removeFromFav(recipe_id);
          }}
          >❤️
      </button>
    </div>
  )
}

export default SavRecipeCard