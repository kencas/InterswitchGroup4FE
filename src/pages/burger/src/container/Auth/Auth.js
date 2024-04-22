import React, {useState, useEffect} from "react";
import InputForm from "../../components/UI/InputForm/InputForm";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import classes from './Auth.css'
import aboutBg from '../../assets/images/about-bg.svg'

import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from '../../store/actions/index'
import { Navigate } from "react-router-dom";
import { checkValidity} from "../../utility/utility"


const Auth = (props) =>{
    const [controls, setControl] = useState({
            email : {
                elementType : 'input',
                elementConfig :{
                    type : "email",
                    placeholder : "E-mail Address",
                },
                value :"",
                validation :{
                    required : true,
                },
                valid : false,
                touched : false,
            },

            password : {
                elementType : 'input',
                elementConfig :{
                    type : "password",
                    placeholder : "Password",
                },
                value :"",
                validation :{
                    required : true,
                    minLength :7,
                },
                valid : false,
                touched : false,
            },
        })

   const [isSignup, setIsSignup] = useState(true)
    
   useEffect(()=>{
    if(!props.buildingBurger && props.authRedirect !=='/'){
        props.onSetAuthRedirect()
    }
   }, [])
 

   const updateInputHandler = (event, elementKey)=>{
        const updatedAuthForm = {
            ...controls,
            [elementKey] :{
                ...controls[elementKey],
                value : event.target.value,
                valid : checkValidity(event.target.value, controls[elementKey].validation),
                touched : true
            }
        }
        setControl(updatedAuthForm)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        props.onAuth(controls.email.value, controls.password.value, isSignup)
    }

    switchAuthMode = () =>{
     setIsSignup(!isSignup)
    }

   

        let inputForm = Object.keys(controls).map(elementKey =>{
            return([...Array(controls[elementKey])]).map(config =>{
                return(

                <InputForm
                key={elementKey}
                elementtype={config.elementType}
                elementconfig={config.elementConfig}
                value={config.value}
                invalid = {!config.valid}
                shouldValidate = {config.validation}
                touched = {config.touched}
                changed={(event)=>this.updateInputHandler(event, elementKey)}/>
                )
            })
        })

        if(props.loading){
            inputForm = <Spinner/>
        }

        let errorMessage = null

        if(props.error){
            errorMessage = <p>{props.error.message}</p>
        }

        let authRedirect = null

        if(props.isAuthenticated){
            authRedirect = <Navigate to={props.authRedirect}/>
        }

        return(
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {inputForm}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button clicked={switchAuthMode} btnType="Cancel">Switch to {isSignup ? 'Login': 'SignUp'}</Button>
            </div>
        )
    
}

const mapStateToProps = state =>{
    return{
        loading : state.auth.loading,
        error : state.auth.error,
        isAuthenticated : state.auth.token !== null,
        authRedirect : state.auth.authRedirectPage,
        buildingBurger : state.reducer.building,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAuth : (email, password, isSignup)=> dispatch(actions.setAuth(email, password, isSignup)),
        onSetAuthRedirect : () => dispatch(actions.setAuthRedirect('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)


