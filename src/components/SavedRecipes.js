import React from 'react'
import SavRecipeCard from './SavRecipeCard'

function SavedRecipes(props) {
    const {savedRecipesData, removeFromFav}= props

    
    const favList = savedRecipesData.map(favRecipe => {
        return(
            <div key={favRecipe.recipe_id}>
                <SavRecipeCard
                    favRecipe={favRecipe}
                    removeFromFav={removeFromFav}
                />
            </div>
        );
    });
    
return (
    <div className="popup-box">
        <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <div>
                <h3>You have {favList.length} Saved Recipes</h3>
                {favList}
            </div>
        </div>
    </div>
)
}
export default SavedRecipes