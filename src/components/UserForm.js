import {useState} from 'react'

function UserForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.confirmPassword !== formData.password) {
      console.log("Passwords do not match")
      // return to exit from function
      // return true or false to  be used in another function for API call??
      return false
    }
    else {
      console.log("Sign up sccessful")
      return true
    }
  } 

  return (
    <div className="form-container" onSubmit={handleSubmit}>UserForm
      <form>
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
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-input confirmation"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <button className="button form-submit">
          Sign Up
        </button>
      </form>

    </div>
  )
}

export default UserForm