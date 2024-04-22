import React from "react";
import classes from './Toolbar.css'
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerButton from "../../SideDrawerButton/SideDrawerButton";

const Toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <SideDrawerButton clicked={props.showSidebar}/>
        <div className={classes.Logo}> 
          <Logo/>
        </div>
     
           <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticate={props.isAuth}/>
          </nav>
    </header>
)
export default Toolbar