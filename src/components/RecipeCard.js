
import React from 'react'


function RecipeCard(props) {
  const {image, title, time, recipe_url, servings} = props.recipe;
  // const [recipe, setRecipe] = useState(props.recipe);
  
  return (
    <div>
      <br/>
      <img className="recipe-img" src={image} alt="food dish"/>
      <h2>{title}</h2>
      <p>plate or fork image {servings} servings</p>
      <p>clock image {time} minutes</p>
    </div>
  )
}

export default RecipeCard