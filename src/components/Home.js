import {useState} from "react";
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";
import Randomizer from "./Randomizer";
import axios from "axios";
import "../App.css"

function Home() {
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
      {/* {component} */}
        <div className='homepage-top'>
            <div className="home-test">
                <IngredientList 
                ingredList={ingredList} 
                setIngredList={setIngredList} 
                deleteIngredient={deleteIngredient}
                clearIngredients={clearIngredients}
                findRecipes={findRecipes}
                />
            </div>
            <div className="home-randomizer">
                <Randomizer getRandomRecipes={getRandomRecipes} />
            </div>  
        </div>
        <RecipeList 
        recipeData={recipeData}
        setRecipeData={setRecipeData}
        />
        <footer className="footer">
            <small>©2023 Foodies C18 development. All rights reserved.</small>
        </footer>
    </main>
    );
}

export default Home;