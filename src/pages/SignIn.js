import React from "react"
import { useNavigate } from "react-router-dom"

const SignIn = () =>{

    const navigate = useNavigate()
    return(
        <div className="auth">
        <form className="input">
            
        <label className="label">Email</label>
        <input className="inputElement" type="email"/>

             
        <label className="label">Password</label>
        <input className="inputElement" type="password"/>

        <button type="submit" className="add_cart_btn mt-5">SUBMIT</button>
        </form>
        <span>Don't have an account? 
        <button onClick={()=> {navigate("/signup") }}>Sign up</button>
        </span> 
        </div>
    )

}

export default SignIn
