import React from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () =>{
    const navigate = useNavigate()
    return(
        <div className="auth">
        <form className="input">
        
            
        <label className="label">First Name</label>
        <input className="inputElement" type="text"/>


            
        <label className="label">Last Name</label>
        <input className="inputElement" type="text"/>
        
            
        <label className="label">Email</label>
        <input className="inputElement" type="email"/>

             
        <label className="label">Password</label>
        <input className="inputElement" type="password"/>

        <button type="submit" className="add_cart_btn mt-5">SUBMIT</button>
        </form>
        <a>Already have an account? 
        <span onClick={()=> {navigate("/signin") }}></span></a> 
        </div>
    )

}

export default SignUp
