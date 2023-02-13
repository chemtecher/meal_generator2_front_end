import React from 'react'

function Ingredient(props) {
  return (

  <main className='test'>
    <div className='ingredients--listed_header'>
      <span
        onClick={() => props.deleteIngredient(props.id)}
        className= "ingredient--remove"
      >
        X
      </span>
      <span className='ingredient--name'>{props.ingredient}</span>
    </div>
  </main>
  )
}

export default Ingredient