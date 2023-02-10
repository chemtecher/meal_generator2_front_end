import React from 'react'
import FavoritesBtn from './FavoritesBtn'
import SavRecipeCard from './SavRecipeCard'


function SavedRecipes(props) {
    const {user_id, getSavedRecipes, savedRecipesData}= props
    const favList = savedRecipesData.map(favRecipe => {
        return(
            <>
            <FavoritesBtn favRecipe={favRecipe}/>
            <SavRecipeCard 
                key={favRecipe.reicpe_id}
                favRecipe={favRecipe}
            />
            </>
        )
    })
    
return (
    <div className="popup-box">
        <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <div>
                <h3 onClick={()=>getSavedRecipes(user_id)}>Favorites</h3>
                <h3>You have {favList.length} Saved Recipes</h3>
                {favList}
            </div>
        </div>
    </div>
)
}
export default SavedRecipes
