import { useState } from 'react'
import UserForm from './UserForm'
import SavedRecipes from './SavedRecipes'
import axios from 'axios'


function NavBar() {
  // create state 
  const [signInClicked, setSignInClicked] = useState(false)
  const [savedRecipesData, setSavedRecipeData] = useState([])
  let user_id = 3;
  
  // Event handler function that runs when "Sign In" in nav bar is clicked
  // toggles the value of signInClicked state 
  const togglePopUpForm = () => {
    // setSignInClicked(true)
    setSignInClicked(!signInClicked)
  }
  const getSavedRecipes = (user_id) => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${user_id}/recipes`)
      .then((response) => {
        setSavedRecipeData(response.data)
        console.log(response.data, "All Saved Recipes")
      })
      .catch((error) => {
        console.log(error)
    })
    }

  return (
    <nav>
      <img src="" alt="chef hat"/>
      <h1 className="nav-title">Bon AppeType!</h1>
      <div className="nav-options">
        <h3 onClick={togglePopUpForm}>
          Sign In
          {signInClicked && <UserForm />}
        </h3>
        <h3 className="nav-about_us">About Us</h3>
        <h3>Log Out</h3>
        {/* <h3>Saved Recipes</h3>  */}
        <SavedRecipes 
          savedRecipesData={savedRecipesData} 
          setSavedRecipeData={setSavedRecipeData}
          getSavedRecipes={getSavedRecipes}
          user_id={user_id}
        /> 
        {/* need onclick for saved button to send you to saved recipes */}
      </div>
    </nav>
  )
}

export default NavBar