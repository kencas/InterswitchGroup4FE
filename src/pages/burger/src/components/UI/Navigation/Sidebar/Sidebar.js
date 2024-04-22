import React, { Fragment } from "react"
import classes from './Sidebar.css'
import NavigationItems from "../NavigationItems/NavigationItems"
import Logo from "../../../Logo/Logo"
import Backdrop from "../../Backdrop/Backdrop"


const Sidebar = (props)=>{

    const addClasses = [classes.Sidebar]
    if(props.show){
        addClasses.push(classes.Open)
    }else{
        addClasses.push(classes.Close)
    }
    return(
    <Fragment>
         <Backdrop show={props.show} clicked={props.closeSidebar}/>
        <div className={addClasses.join(' ')} onClick={props.closeSidebar}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            
        <NavigationItems isAuthenticate={props.isAuth}/>
        </div>

    </Fragment>
   
)}

export default Sidebar