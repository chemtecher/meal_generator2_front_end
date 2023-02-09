import React, {useState} from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
// import dispatch from './NavBarLoggedIn'
import { setLogin } from '../features/counter/counterSlice';

function SignUpForm() {
  
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      confirmPassword: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : value
      }
    })
  }

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.confirmPassword !== formData.password) {
      console.log("Passwords do not match")
      // or add some sort of break
      return false
      // return to exit from function
      // return true or false to  be used in another function for API call??
      // return false
    }
    else {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, formData).then((response) => {
                // localStorage.setItem("token", JSON.stringify(response.data));
      dispatch(setLogin(response.data.token))
                // setLoggedIn(true);
            })
        
      // console.log("Sign up sccessful")
      .catch(error => console.log(error.data))
    };
    
    setFormData(
      {
        email: "",
        password: "",
        confirmPassword: ""
      }
    )
  } 

  return (
    <div className="form-container popup-box" >
      <div className="box">
        <form className="form user-info">
          <p>Sign Up</p>
          <input
            type="email"
            placeholder="Email address"
            className="form-input email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-input confirmation"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          <button className="button user-form-submit" onClick={e => handleSubmit(e)}>
            Sign Up
          </button>
          {/* here im going to render the message of whether user was successful or not- based on state */}
        </form>
      </div>
    </div>
  )
}

export default SignUpForm;