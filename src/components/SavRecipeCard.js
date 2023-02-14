
import {useState} from 'react'


function SavRecipeCard(props) {
  const {image, title, time, recipe_url, servings, recipe_id} = props.favRecipe;
  const [liked, setLiked] = useState(true);
  
  const heartFill = liked ? '❤️' : '🤍';
  
  return (
    <div className="recipe-card saved-recipe-card">
      SavRecipeCard
      <br />
      <img className="recipe-img" src={image} alt="food dish" />
      <h2>{title}</h2>
      {/* <p>plate or fork image {servings} servings</p> */}
      <p>clock image {time} mins</p>
      <button
          onClick={() => {
          props.removeFromFav(recipe_id);
          setLiked(!liked)
          }}
          >{heartFill}
      </button>
    </div>
  )
}

export default SavRecipeCard