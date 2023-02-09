import React, { useEffect, useState } from 'react'
import PopUp from './PopUp';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import NavBarLoggedIn from "./NavBarLoggedIn"


function NavBarLoggedOut() {

    const [signUpPopup, setSignUpPopup] = useState(false);
    const [signInPopup, setSignInPopup] = useState(false);


    //KEEP 

    // if (token) {
    //     return (
    //         <NavBarLoggedIn />
    //     )
    // }

    return (
        <nav>
            <img src='' alt='chef hat' />
            <a href="/" className="nav-title">Bon AppeType!</a>
            <ul className='nav--options'>
                <li><a href="/about" className='nav--about_link'>About Us</a></li>
                <li onClick={()=> setSignInPopup(true)}>Log In</li>
                <PopUp trigger ={signInPopup} setTrigger={setSignInPopup}>
                    <SignInForm />
                </PopUp >
                <li onClick={()=> setSignUpPopup(true)}>Sign Up</li>
                <PopUp trigger ={signUpPopup} setTrigger={setSignUpPopup}>
                    <SignUpForm/>
                </PopUp>
            </ul>
        </nav>
    )
}

export default NavBarLoggedOut;