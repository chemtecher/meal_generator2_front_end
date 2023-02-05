import React from 'react'
import chefHat from 
function NavBar() {
  return (
    <nav>
      <img src="./images/servings_icon.png" alt="chef hat"/>
      <h1 className="nav-title">Bon AppeType!</h1>
      <div className="nav-options" >
        <h3>Sign In</h3>
        <h3 className="nav-about_us">About Us</h3>
        <h3>Log Out</h3>
        <h3>Saved Recipes</h3>
      </div>
    </nav>
  )
}

export default NavBar