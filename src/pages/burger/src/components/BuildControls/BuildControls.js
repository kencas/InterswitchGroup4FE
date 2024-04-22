import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import classes from './BuildControls.css'

const ingredientsType = [
    {label : 'Salad', type : 'salad'},
    {label : 'Onion', type : 'onion'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Chocolate', type : 'chocolate'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Meat', type : 'meat'},
]

const BuildControls = (props)=>{   
   return (
    <div className={classes.BuildControls}>
        <p> <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
        {ingredientsType.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                add={()=>props.addIngredient(ctrl.type)}
                remove={()=>props.removeIngredient(ctrl.type)}
                disabled={props.disabledInfo[ctrl.type]}
                />
        })}
        <button className={classes.OrderButton}
         onClick={props.orderSummary}
         disabled={!props.orderNow}>{props.isAuth ? 'Order Now' : 'Signup to continue'}</button>
    </div>
   )
}
export default BuildControls