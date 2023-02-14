import {useState} from 'react'
import Ingredient from './Ingredient'

function IngredientList(props) {
  // destructuring props to use variable names vs props.variable
  const{ingredList, setIngredList, deleteIngredient, clearIngredients, findRecipes} = props;
  const [ingredInput, setIngredInput] = useState("");
  
  const handleChange =async( event) => {
    setIngredInput(event.target.value);
  }

  // onClick event handler function
  // take current ingredInput and split 
  // into an array of string ingredients
  // Spreads IngredsInput and Previous Ingreds into new array
  // Updates IngredList state with new spread array
 
  const getIngredientsList = () => {
    const inputList = ingredInput.split(",")
    setIngredList(prevIngredList => {
      return [...prevIngredList, ...inputList]
    })
    setIngredInput("")
  }
  
  console.log(ingredList)

  const ingredElements = ingredList.map((ingredient, index) => 
  <div key={index}>
      <Ingredient
        id={index}
        deleteIngredient={deleteIngredient}
        ingredient={ingredient}
      />
    </div>
  )
  
    return (
    <div className='ingredients--header'>
      <h3 className='ingredients--title'>Ingredients:</h3>
      <p className='ingredients--comment'>Separate each ingredient with a comma</p>
      <input
      className="form-ingredient-input"
      type="text"
      placeholder="enter ingredient(s) here"
      name="ingredientInput"
      value={ingredInput ||""}
      onChange={handleChange}
      />
      
    <button
      className="button-submit-ingredients"
      onClick={getIngredientsList}
      >Submit
    </button>
    <div className='ingredients_list'>
      <h3 className='ingredients_list--title'>Ingredient(s) List:</h3>
    </div>
        <div className='ingredients-elements'>
          {ingredElements}
        </div> 
      <button 
        className="button-find-recipes"
        onClick={findRecipes}
        >Find Me Recipes 
      </button>
      <button 
        className="button-clear-ingredients"
        onClick={clearIngredients}
        >Clear Ingredients  
      </button>
    </div>
  )
}

export default IngredientList