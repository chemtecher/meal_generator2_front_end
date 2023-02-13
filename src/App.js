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


  if (isLogin.token) {
    return (
      <main>
        <NavBarLoggedIn />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/*props may need to be added to the SavedRecipes component*/}
          <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
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
