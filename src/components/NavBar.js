import { useState } from 'react'
import UserForm from './UserForm'


function NavBar() {
  // create state 
  const [isOpen, setIsOpen] = useState(false)

  // Event handler function that runs when Sign In is clicked
  // toggles the value of isOpen state 

  const togglePopUpForm = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav>
      <img src='./' alt="chef hat"/>
      <h1 className="nav-title">Bon AppeType!</h1>
      <div className="nav-options">
        <h3 onClick={togglePopUpForm}>
          Sign In
          {isOpen && <UserForm />}
        </h3>
        <h3 className="nav-about_us">About Us</h3>
        <h3>Log Out</h3>
        <h3>Saved Recipes</h3>
      </div>
    </nav>
  )
}

export default NavBar