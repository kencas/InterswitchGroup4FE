import React from "react"
import classes from './BurgerIngredients.css'

const BurgerIngredients = (props)=>{
    let ingredients = null;

    switch (props.type){
        case 'bread-top':
            ingredients = <div className={classes.BreadTop}>
                <div className={classes.Seed1}></div>
                <div className={classes.Seed2}></div>
            </div>
            break;
        
        case 'bread-bottom':
            ingredients = <div className={classes.BreadBottom}></div>
            break;
        
        case 'salad':
            ingredients = <div className={classes.Salad}></div>
            break;
        
        case 'onion':
            ingredients = <div className={classes.Onion}></div>
            break;

        case 'chocolate':
            ingredients = <div className={classes.Chocolate}></div>
            break;

        case 'bacon':
            ingredients = <div className={classes.Bacon}></div>
            break;

        case 'cheese':
            ingredients = <div className={classes.Cheese}></div>
            break;

        case 'meat':
            ingredients = <div className={classes.Meat}></div>
            break;

        default:
            ingredients = null
            break
        
    }

    return ingredients;
}

export default BurgerIngredients