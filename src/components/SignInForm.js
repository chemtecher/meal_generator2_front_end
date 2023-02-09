import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setLogout } from '../features/counter/counterSlice';
// import { useDispatch } from 'react-redux';
// import dispatch from './NavBarLoggedIn'


function SignInForm() {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    );

    // const isLogin = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const onLogin = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, formData )
            .then((response) => {
                // localStorage.setItem("token", JSON.stringify(response.data));
                dispatch(setLogin(response.data.token))
                // setLoggedIn(true);
            })
            .catch((error) => {
            console.log(error.response)
            });

        setFormData(
            {
                email: "",
                password:""
            }
        )
    }


    return (
    <div className="form-container popup-box">
        <div className="box">
            <form className="form user-info" >
                <p>Log In</p>
                <label>
                    Email: 
                    <input
                    value={formData.email}
                    type='text'
                    placeholder='email@example.com'
                    name='email'
                    // ... -> copying current state, and adding (in this case) email value from form 
                    onChange={e => setFormData({...formData, email: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    value={formData.password}
                    type='password'
                    placeholder='password'
                    name='password'
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                        />
                </label>
                <br />
                <button type='submit' onClick={e => onLogin(e)} className="button user-form-submit">
                    Login
                </button>
            </form>
        </div>
    </div>
    )
}

export default SignInForm;