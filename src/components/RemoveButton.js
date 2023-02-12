import React from 'react'
import axios from 'axios';

function RemoveButton({favRecipe, getSavedRecipes}) {
  const removeFromFav = () => {
    try {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/search_recipes/remove/${favRecipe.recipe_id}`);
      console.log("Recipe removed from saved")
      getSavedRecipes()
      
    } 
    catch (error) {
      console.log(error)
    }
  }
  // const removeFromFav = () => {
  //   try {
  //     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/search_recipes/remove/${favRecipe.recipe_id}`);
  //     console.log("Recipe removed from saved")
  //     getSavedRecipes()

  //   } 
  //   catch (error) {
  //     console.log(error)
  //   }
  // }
  
  return (
    <button
      onClick={() => {
      removeFromFav();
      }}
    >❤️
    </button>
  )
}

export default RemoveButton