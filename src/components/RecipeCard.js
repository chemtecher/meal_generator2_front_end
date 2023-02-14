
import React from 'react'


function RecipeCard(props) {
  const {image, title, time, recipe_url, servings} = props.recipe;
  // const [recipe, setRecipe] = useState(props.recipe);
  
  return (
    <div>
    
      <img className="recipe-img" src={image} alt="food dish"/>
      <h2>{title}</h2>
      <img 
        className="recipe-servings-img" 
        src={require('../images/servings_icon.png')} 
        alt="plate and fork"
        /> {servings} servings
      <img
        className="recipe-time-img"
        src={require("../images/time_icon.png")}
        alt="clock"
      /> {time} mins
    </div>

  )
}

export default RecipeCard