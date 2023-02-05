import {useState} from "react";
import IngredientList from "./components/IngredientList";
import RecipeList from "./components/RecipeList";
import Randomizer from "./components/Randomizer";
import NavBar from "./components/NavBar";
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
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/search_recipes?ingredients=${ingredList}`)
  .then((response) => {
    setRecipeData(response.data)
  })
  .catch((error) => {
    console.log(error)
})
}
const getRandomRecipes = () => {
  console.log("get Random recipes!")
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/search_recipes/random`)
  .then((response) => {
    setRecipeData(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}


  return (
    <main className="App">
      <NavBar />
      <h1>Bon AppeType!</h1>
      <IngredientList 
        ingredList={ingredList} 
        setIngredList={setIngredList} 
        deleteIngredient={deleteIngredient}
        clearIngredients={clearIngredients}
        findRecipes={findRecipes}
      />
      <Randomizer getRandomRecipes={getRandomRecipes} />
      <RecipeList 
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
    </main>
  );
}

export default App;
