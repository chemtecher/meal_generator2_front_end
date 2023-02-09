import React from 'react';
import { useDispatch } from 'react-redux';
import  { Link } from 'react-router-dom'
// import  { Link, useHistory, redirectToPath } from 'react-router-dom'
import { setLogin } from '../features/counter/counterSlice';

function NavBarLoggedIn() {
    // const history = useHistory();
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setLogin(null))
        // redirectToPath(history)
    }


    return (
        <nav>
            <img src='' alt='chef hat' />
            {/* remove the anchor tag and wrap into LINK tag -> what this does it that it omits refresh */}
            {/* <a href="/" className="nav-title">Bon AppeType!</a> */}
            <Link to='/'>
                Bon AppeType
            </Link>
            <ul className='nav--options'>
                <Link to='/about'>
                    <li>About Us</li>
                </Link>
                <Link to='/saved-recipes'>
                    <li>Saved Recipes</li>
                </Link>
                {/* In the logout we will add an onclick with dispatch to update state back to null to rerender the page */}
                {/* Make sure that the backend is up to date in Heroku */}
                {/* We will also have to do the same with SignUp as what we did with Sign In -> line17/line24 */}
                <li onClick={logout}>Logout</li>
            </ul>
        </nav>
    )
}

export default NavBarLoggedIn;


