import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
// import  { Link, useHistory, redirectToPath } from 'react-router-dom'
import { setLogin } from '../features/counter/counterSlice';
import axios from 'axios';
import SavedRecipes from './SavedRecipes';

function NavBarLoggedIn() {
    // THIS IS FOR REDUX
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const logout = () => {
        dispatch(setLogin(null));
        navigate('/')
    }
    // THIS IS FOR REDUX
    const [savedRecipesData, setSavedRecipesData] = useState([]);
    let user_id = 3;
    const [favClicked, setFavClicked] = useState(false);
    const toggleFavPopUp = () => {
        setFavClicked(!favClicked)
    };

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
            <img
                src={require('../images/chefHat.png')}
                alt='chef hat'
                className='nav--img'
            />
            <Link to='/'>
                Bon AppeType
            </Link>
            <ul className='nav--options'>
                <Link to='/about'>
                    <li>About Us</li>
                </Link>
                {/* <Link to='/saved-recipes'> */}
                    {/* <li> Saved Recipes </li> */}
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
                {/* </Link> */}
                <li onClick={logout}>Logout</li>
            </ul>
        </nav>
    )
}

export default NavBarLoggedIn;


