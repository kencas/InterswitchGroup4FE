import React from "react";
import classes from './Order.css'
import Button from "../UI/Button/Button";


const Order = (props) =>{
    const ingredients = Object.keys(props.ingredients).map(ig =>{
        return <span key={ig}
            style={{
            textTransform : 'capitalize',
            border : '1px solid #ccc',
            padding : '3px',
            margin : '0 5px'
            }}> {ig} ({props.ingredients[ig]})</span>
    })
    return(

        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p> Price: <strong>USD {props.price.toFixed(2)}</strong></p>

            <Button btnType="Cancel" clicked={props.removeOrder}>Remove Order</Button>

        </div>   
    
)}

export default Order