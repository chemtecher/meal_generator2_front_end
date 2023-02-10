import React from 'react'
import RecipeCard from './RecipeCard';

function SavedRecipes(props) {
    const {user_id, getSavedRecipes, savedRecipesData}= props
    const favList = savedRecipesData.map(favRecipe => {
        return (<RecipeCard 
            key={favRecipe.recipe_id}
            favRecipe={favRecipe}
        />
        )
    })
return (
    <div className="popup-box">
        <div className="box">
            <div>
                <h3 onClick={()=>getSavedRecipes(user_id)}>Favorites</h3>
                {favList}
            </div>
    </div>
  </div>
)
}
export default SavedRecipes
