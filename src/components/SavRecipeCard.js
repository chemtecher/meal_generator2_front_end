import React from 'react'

function SavRecipeCard(props) {
  const {image, title, time, recipe_url, servings} = props.favRecipe;
  return (
    <div>
      SavRecipeCard
      <br />
      <img className="recipe-img" src={image} alt="food dish" />
      <h2>{title}</h2>
      <p>plate or fork image {servings}</p>
      <p>clock image {time}</p>
    </div>
  )
}

export default SavRecipeCard