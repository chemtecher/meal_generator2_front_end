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
  
  // onClick event handler function
  // removes ingredient from ingredList
  // delete the ingredient whose index === id
  // Filtered IngredList State by removing ingredient whose index is equal to passed in Id 
  // Then updated IngredList state with filtered List
  // ingredient represents an element from the prev state

  // const deleteIngredient = (id) => {
  //   setIngredList(prevIngredList => {
  //     const updatedList = prevIngredList.filter(ingredient => prevIngredList.indexOf(ingredient)!== id)
  //     return updatedList
  //   })
  // }
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
    <div>
      <h3>Ingredients:</h3>
      <input
      className="form-ingredient-input"
      type="text"
      placeholder="enter ingredient(s) here"
      name="ingredientInput"
      value={ingredInput ||""}
      onChange={handleChange}
      />
      
    <button
      className="button submit-ingredients"
      onClick={getIngredientsList}
      >Submit
    </button>
    <div>
      <h3>Ingredient(s) List:</h3>
    </div>
      {ingredElements}
      <button 
        className="button find-recipes"
        onClick={findRecipes}
        >Find Me Recipes 
      </button>
      <button 
        className="button clear-ingredients"
        onClick={clearIngredients}
        >Clear Ingredients  
      </button>
    </div>
  )
}

export default IngredientList