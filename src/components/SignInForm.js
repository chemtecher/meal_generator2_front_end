import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setLogin } from '../features/counter/counterSlice';


function SignInForm() {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    );

    const [status, setStatus] = useState("");

    const dispatch = useDispatch()

    const onLogin = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, formData)
            .then((response) => {
                dispatch(setLogin(response.data.token));
                setStatus({ type: 'success' });
            })
            .catch((error) => {
                // console.log(error.response)
                setStatus({ type: 'error', error });
            });

        setFormData(
            {
                // email: "",
                // password: ""
                ...formData,
                password:""
            }
        );

    };


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
                    placeholder='Email address'
                    name='email'
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
                    name='Password'
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                        />
                </label>
                <br />
                <button type='submit' onClick={e => onLogin(e)} className="button user-form-submit">
                    Login
                </button>
                {status.type === 'error' ? <p className='SignInForm--failure'>Login unsuccessful- please check email or password.</p> : null}
            </form>
        </div>
    </div>
    )
}

export default SignInForm;