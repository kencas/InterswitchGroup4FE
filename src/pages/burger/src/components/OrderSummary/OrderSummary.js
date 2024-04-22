import React,{Fragment} from "react";
import Button from "../UI/Button/Button";

const OrderSummary = (props) =>{

    const orderIngredient = Object.keys(props.ingredients).map(igKey => {
        return( <li key={igKey} style={{padding : '3px', marginLeft: '10px'}}>
                 <span style={{ textTransform : "capitalize"}}> {igKey} : {props.ingredients[igKey]} </span>
              </li>
        )
      })
    return(
    <Fragment>
        <h3>Your Order</h3>
        <p>Enjoy Your Delicious Burger with the following ingredients: </p>

            <ul>
                {orderIngredient}
            </ul>
            <p> <strong> Total Price: ${props.totalPrice.toFixed(2)} </strong></p>
            <p>Continue to checkout?</p>

        <Button btnType="Cancel" clicked={props.cancelPurchase}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
    </Fragment>
    )
    
}

export default OrderSummary