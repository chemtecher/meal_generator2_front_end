import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { Link } from 'react-router-dom'
// import  { Link, useHistory, redirectToPath } from 'react-router-dom'
import { setLogin } from '../features/counter/counterSlice';
import SavedRecipes from './SavedRecipes';
import axios from 'axios'

function NavBarLoggedIn() {
    // const history = useHistory();
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setLogin(null))
        // redirectToPath(history)
    }

    const [savedRecipesData, setSavedRecipeData] = useState([])

    let user_id = 3;

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
            <img src='' alt='chef hat' />
            <Link to='/'>
                Bon AppeType
            </Link>
            <ul className='nav--options'>
                <Link to='/about'>
                    <li>About Us</li>
                </Link>
                <Link to='/saved-recipes'>
                    <SavedRecipes
                        savedRecipesData={savedRecipesData} 
                        setSavedRecipeData={setSavedRecipeData}
                        getSavedRecipes={getSavedRecipes}
                        user_id={user_id}     
                    />
                </Link>
                <li onClick={logout}>Logout</li>
            </ul>
        </nav>
    )
}

export default NavBarLoggedIn;


