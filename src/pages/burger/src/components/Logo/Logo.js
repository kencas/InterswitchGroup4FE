import React from "react";
import classes from  './Logo.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = ()=>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="BurgerLogo"/>
    </div>
)

export default Logo