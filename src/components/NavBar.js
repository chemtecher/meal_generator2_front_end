import { useState } from 'react'
import UserForm from './UserForm'
import SavedRecipes from './SavedRecipes'
import axios from 'axios'


function NavBar() {
  // create state 
  const [signInClicked, setSignInClicked] = useState(false)
  const [favClicked, setFavClicked] = useState(false)
  const [savedRecipesData, setSavedRecipesData] = useState([])

  let user_id = 3;
  
  // Event handler function that runs when "Sign In" in nav bar is clicked
  // toggles the value of signInClicked state 
  const togglePopUpForm = () => {
    setSignInClicked(!signInClicked)
  }
  const toggleFavPopUp = () => {
    setFavClicked(!favClicked)
  }
  const getSavedRecipes = (user_id) => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${user_id}/recipes`)
      .then((response) => {
        setSavedRecipesData(response.data)
        console.log(response.data, "All Saved Recipes")
      })
      .catch((error) => {
        console.log(error)
    })
  }
  const removeFromFav = (recipe_id) => {
    try {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/search_recipes/remove/${recipe_id}`)
      .then((data) => {
        const newlyFilteredRecipes = savedRecipesData.filter((recipe) => {
          return recipe.recipe_id !== recipe_id
        })
        setSavedRecipesData(newlyFilteredRecipes)
        console.log(data)
      })
      console.log("Inside removed from saved")
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav>
      <img src="" alt="chef hat"/>
      <h1 className="nav-title">Bon AppeType!</h1>
      <div className="nav-options">
        <h3 onClick={togglePopUpForm}>
          Sign In
          {signInClicked && <UserForm handleClose={togglePopUpForm}/>}
        </h3>
        <h3 className="nav-about_us">About Us</h3>
        <h3>Log Out</h3>
        <h3 onClick={() => {
          toggleFavPopUp();
          getSavedRecipes(user_id);
        }}
        >Favorites</h3>
        {favClicked && <SavedRecipes 
          savedRecipesData={savedRecipesData} 
          setSavedRecipesData={setSavedRecipesData}
          user_id={user_id}
          handleClose={toggleFavPopUp}
          getSavedRecipes={getSavedRecipes}
          removeFromFav={removeFromFav}
        />}
      </div>
    </nav>
  )
}

export default NavBar