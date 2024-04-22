import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from './Burger.css'

const Burger = (props) =>{

    let transformedIngredients = Object.keys(props.ingredients).map(igkey =>{
        return([...Array(props.ingredients[igkey])]).map((_, i)=>{
            return <BurgerIngredients key={igkey + i}
                type={igkey}/>
        })
    }).reduce((preVal, currVal) =>{
        return preVal.concat(currVal)
    },[])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please insert ingredients</p>
    }

    return (
        <div className={classes.Burger}>
        <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default Burger