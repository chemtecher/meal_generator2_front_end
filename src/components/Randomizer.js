import React from 'react'

function Randomizer(props) {

  
  return (
    <div className="randomizer-container">
      <p>I need to go shopping but I don’t know what to cook?</p>
      <button
      className="button random-recipes"
      onClick={props.getRandomRecipes}
      >Get Random Recipes!
    </button>
    </div>
  )
}

export default Randomizer