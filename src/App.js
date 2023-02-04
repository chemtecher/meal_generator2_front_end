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
  let ingredients = ingredList.toString()
  axios.get(`https://bon-appetype.herokuapp.com/search_recipes?ingredients=${ingredients}`)
  .then((response) => {
    setRecipeData(response.data)
  })
  .catch((error) => {
    console.log(error)
})
}
const getRandomRecipes = () => {
  console.log("get Random recipes!")
  axios.get('https://bon-appetype.herokuapp.com/search_recipes/random')
  .then((response) => {
    setRecipeData(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}


// placeholder function
// const getRandomRecipes = () => {
//   console.log("get Random recipes!")
// }


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
      <RecipeList 
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
    </main>
  );
}

export default App;
