import React, {useState} from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setLogin } from '../features/counter/counterSlice';

function SignUpForm() {
  
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      confirmPassword: ""
    })
  
  const [status, setStatus] = useState("")

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
      setStatus("error")
    }
    else {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, formData).then((response) => {

      dispatch(setLogin(response.data.token))
            })
      
      .catch(error => console.log(error.data))
    };
    
    setFormData(
      {
        // email: "",
        ...formData,
        password: "",
        confirmPassword: ""
      }
    )
  } 

  return (
    <div className="form-container popup-box" >
      <div className="box">
        <form className="form user-info">
          <p className="form--title">Sign Up</p>
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
          {status === 'error' ? <p className='SignInForm--failure'>Sign up unsuccessful- passwords do not match.</p> : null}
        </form>
      </div>
    </div>
  )
}

export default SignUpForm;