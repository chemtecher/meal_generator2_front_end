import {useState} from "react";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
import Randomizer from "./components/Randomizer";
import axios from "axios";

function App() {
const [ingredList, setIngredList] = useState([])
const [recipeData, setRecipeData] = useState([])


const deleteIngredient = (id) => {
  setIngredList(prevIngredList => {
    const updatedList = prevIngredList.filter(ingredient => prevIngredList.indexOf(ingredient)!== id)
    return updatedList
  })
}

const clearIngredients = () => {
  setIngredList([])
}

const findRecipes = () => {
  console.log("Here is where we make API calls")
}

const getRandomRecipes = () => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/{ingredList}`)
  console.log("get random recipes list")
}


  return (
    <main className="App">
      <h1>Bon AppeType!</h1>
      <IngredientList 
        ingredList={ingredList} 
        setIngredList={setIngredList} 
        deleteIngredient={deleteIngredient}
        clearIngredients={clearIngredients}
        findRecipes={findRecipes}
      />
      <Randomizer getRandomRecipes={getRandomRecipes} />
      <RecipeList />
    </main>
  );
}

export default App;
