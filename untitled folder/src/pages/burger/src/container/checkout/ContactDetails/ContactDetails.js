import React from "react";
import { useState } from "react/cjs/react.production.min";
import InputForm from "../../../components/UI/InputForm/InputForm";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from './ContactDetails.css'
import {connect} from "react-redux";
import * as orderActionCreator from '../../../store/actions/index';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../axios-order";
import {checkValidity} from "../../../utility/utility"



const ContactDetails = (props)=>{
    const [orderForm, setOrderForm] = useState({
            name : {
                elementType : 'input',
                elementConfig :{
                    type : "text",
                    placeholder : "Full Name",
                },
                value :"",
                validation :{
                    required : true,
                },
                valid : false,
                touched : false,
            },

            email : {
                elementType : 'input',
                elementConfig :{
                    type : "email",
                    placeholder : "E-mail",
                },
                value :"",
                validation :{
                    required : true,
                },
                valid : false,
                touched : false,
            },

            country : {
                elementType : 'input',
                elementConfig :{
                    type : "text",
                    placeholder : "Country",
                },
                value :"",
                validation :{
                    required : true,
                },
                valid : false,
                touched : false,
            },

            street : {
                elementType : 'input',
                elementConfig :{
                    type : "text",
                    placeholder : "Street",
                },
                value :"",
                validation :{
                    required : true,
                },
                valid : false,
                touched : false,
            },

            zipcode : {
                elementType : 'input',
                elementConfig :{
                    type : "text",
                    placeholder : "Zipcode",
                },
                value :"",
                validation :{
                    required : true,
                    minLength : 5,
                    maxLength : 7,
                },
                valid : false,
                touched : false,
            },
            
            delivery : {
                elementType : 'select',
                elementConfig :{
                  options : [
                    {value : "fastest", displayValue : "Fastest"},
                    {value : "cheapest", displayValue : "Cheapest"}
                  ]
                },
                value :"",
                validation : {},
                valid : true,
            }
    })
    const [formIsValid, setFormIsValid] = useState(false)

    const updateInputHandler = (event, inputKey) =>{
        const formElement = {...orderForm}
        const formElementValue = {...formElement[inputKey]}
    
        formElementValue.value = event.target.value
        formElementValue.valid = checkValidity(formElementValue.value, formElementValue.validation)
        formElementValue.touched = true;
        formElement[inputKey] = formElementValue

        console.log(formElementValue)

        let formValid = true

        for(let inputKey in formElement){
            formValid = formElement[inputKey].valid && formValid
        }

        setOrderForm(formElement)
        setFormIsValid(formValid)
        
    }

    const submitDataHandler = (e) =>{
        e.preventDefault()
        let formData = {}
        for(let formDataElement in orderForm){
            formData[formDataElement] = orderForm[formDataElement].value
        }

        const orderData = {
            ingredients : props.ing,
            totalPrice : props.totalPrice,
            contactData : formData,
            userId : props.userId
        };

       props.onBurgerOrder(orderData, props.token)

        //  axios.post('https://www.firebase.io', data)
        //    .then(res => { 
        //            this.setState({loading : false});
        //            this.props.history.push('/') 
        //         })
        //     .catch(err => { this.setState({loading : false})}) 

    }

  
        const transformedInput = Object.keys(orderForm).map(elementKey =>{
            return([...Array(orderForm[elementKey])]).map(config =>{
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
        
        let form = <form onSubmit={submitDataHandler}>
        {transformedInput}
        <Button btnType="Success" disabled={!orderForm.formIsValid}>Order</Button>
        </form>   
            if(props.loading){
                form = <Spinner/>
            }
        return(
            
            <div className={classes.ContactDetails}>
                <h3>Enter Your Contact Details</h3>
               {form}
            </div>
        )
  
}

const mapStateToProps = state =>{
    return {
        ing : state.reducer.ingredients,
        totalPrice : state.reducer.totalPrice,
        loading : state.orderReducer.loading,
        token : state.auth.token,
        userId : state.auth.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onBurgerOrder : (orderData, token) => dispatch(orderActionCreator.setPurchaced(orderData, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler((ContactDetails, axios)))
