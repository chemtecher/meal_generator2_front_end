import React, { useEffect, useState } from 'react'
import About from "./components/About"  
import Home from "./components/Home"
import NavBarLoggedOut from "./components/NavBarLoggedOut";
import NavBarLoggedIn from "./components/NavBarLoggedIn";
import SavedRecipes from "./components/SavedRecipes"
import { Route, Routes } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// import { setLogin, setLogout } from './features/counter/counterSlice';

function App() {

  // const [isLogin, setisLogin] = useState(false)
  

  const isLogin = useSelector((state) => state.login)
  console.log(isLogin)
  // const isLogin = localStorage.getItem('token')
  // const isLogin = localStorage.getItem('token')
  // setisLogin(localStorage.getItem('token'))
  // console.log(isLogin)
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   setisLogin(prevState => !prevState)
  // }, [isLogin])

  const [savedRecipesData, setSavedRecipesData] = useState([])

    let user_id = 3;

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

  

  if (isLogin.token) {
    return (
      <main>
        <NavBarLoggedIn />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/saved-recipes" element={<SavedRecipes savedRecipesData={savedRecipesData} setSavedRecipesData={setSavedRecipesData} getSavedRecipes={getSavedRecipes} user_id={user_id}/>}></Route>
        </Routes>
      </main>
    )
  }

  return (
    <main>
      <NavBarLoggedOut />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
      </Routes>
      {/* <SignInForm /> */}
    </main>
    
  );
}

export default App;
