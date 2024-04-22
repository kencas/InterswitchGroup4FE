import React from "react";
import classes from './SideDrawerButton.css'

const SideDrawerButton = (props) =>(
    <div className={classes.SideDrawerButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
)

export default SideDrawerButton