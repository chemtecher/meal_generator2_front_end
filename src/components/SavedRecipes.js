import React from 'react'
import FavoritesBtn from './FavoritesBtn'
import SavRecipeCard from './SavRecipeCard'

function SavedRecipes(props) {
    const {user_id, getSavedRecipes, savedRecipesData}= props
    const favList = savedRecipesData.map(favRecipe => {
        return(
            <div key={favRecipe.recipe_id}>
                <FavoritesBtn favRecipe={favRecipe} />
                <SavRecipeCard
                    favRecipe={favRecipe}
                />
            </div>
        );
    });
    
return (
    <div className="popup-box">
        <div className="box">
            <div>
                <h3 onClick={()=>getSavedRecipes(user_id)}>Favorites</h3>
                <h3>You have {favList.length} Saved Recipes</h3>
                {favList}
            </div>
        </div>
    </div>
)
};
export default SavedRecipes;