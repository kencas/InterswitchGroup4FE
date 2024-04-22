import React from "react";
import classes from './CheckoutSummary.css'
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props)=>(

    <div className={classes.CheckoutSummary}>
        <h3>Hope it taste nice !!!</h3>
        <div style={{margin: 'auto', width: '100%', padding:'15px 0'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType="Cancel" clicked={props.onCheckoutCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.onCheckoutContinue}>CONTINUE</Button>
    </div>
)

export default CheckoutSummary