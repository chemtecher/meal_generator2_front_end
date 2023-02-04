import React from 'react'

function Randomizer(props) {

  
  return (
    <div>Randomizer
      <button
      className="button random-recipes"
      onClick={props.getRandomRecipes}
      >Get Random Recipes!
    </button>

    </div>
  )
}

export default Randomizer