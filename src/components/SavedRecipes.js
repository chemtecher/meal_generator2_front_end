import React from 'react'
import SavRecipeCard from './SavRecipeCard'
import RemoveButton from './RemoveButton'


function SavedRecipes(props) {
    const {savedRecipesData, getSavedRecipes}= props

    
    const favList = savedRecipesData.map(favRecipe => {
        return(
            <div key={favRecipe.recipe_id}>
                <SavRecipeCard
                    favRecipe={favRecipe}
                />
                <RemoveButton 
                favRecipe={favRecipe} 
                getSavedRecipes={getSavedRecipes}
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
