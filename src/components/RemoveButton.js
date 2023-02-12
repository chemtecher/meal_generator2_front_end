import React from 'react'
import axios from 'axios';

function RemoveButton({favRecipe}) {
  const removeFromFav = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/search_recipes/remove/${favRecipe.recipe_id}`);
  }
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