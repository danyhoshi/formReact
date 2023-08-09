import { useState } from 'react'
import './App.css'

function App() {
    const [formData, setFormData] = useState(
        {
            emailAddress: "", 
            password: "", 
            confirmPassword: "", 
            iWant: false
        }
    )
    function handleChange(event) {
        const {name, type, checked, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        }       
        )
    }
    function handleSubmit(event) {
        event.preventDefault()
        let message = formData.password === formData.confirmPassword ? ` *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+* \n \n Successfully signed up \n \n *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+* ` : "Passwords to not match"
        
        console.log(message);

        if(formData.password === formData.confirmPassword && formData.iWant)
            console.log("Thanks for signing up for our newsletter")
    }
    console.log(formData);
  return (
   <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name = "emailAddress"
                    placeholder="Email address"
                    className="form--input"
                    value = { formData.email }
                    onChange={ handleChange }
                />
                <input 
                    type="password" 
                    name = "password"
                    placeholder="Password"
                    className="form--input"
                    value = { formData.password }
                    onChange={ handleChange }
                />
                <input 
                    type="password" 
                    name = "confirmPassword"
                    placeholder="Confirm password"
                    className="form--input"
                    value = { formData.confirmPassword }
                    onChange={ handleChange }
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        name = "iWant"
                        type="checkbox"
                        checked = { formData.iWant }
                        onChange={ handleChange }
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
  
}

export default App
