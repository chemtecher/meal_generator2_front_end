import React from 'react'

function Ingredient(props) {
  return (
    <div>
      <span onClick={()=>props.deleteIngredient(props.id)}>X </span>
      <span>{props.ingredient}</span>
    </div>
  )
}

export default Ingredient