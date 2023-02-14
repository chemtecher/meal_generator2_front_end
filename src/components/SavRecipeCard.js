
import {useState} from 'react'


function SavRecipeCard(props) {
  const {image, title, time, recipe_url, recipe_id} = props.favRecipe;
  const [liked, setLiked] = useState(true);
  
  const heartFill = liked ? '❤️' : '🤍';
  
  return (
    <div className="recipe-card saved-recipe-card">
      <img className="recipe-img" src={image} alt="food dish" />
      <h2>{title}</h2>
      <img
        className="recipe-time-img"
        src={require("../images/time_icon.png")}
        alt="clock"
      /> {time} mins
      <button
          className="favorites-button"
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