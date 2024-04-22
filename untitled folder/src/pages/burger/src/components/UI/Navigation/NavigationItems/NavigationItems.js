import React from "react";
import classes from './NavigationItems.css'
import { NavLink } from 'react-router-dom'

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <li><NavLink className={({isActive, isPending}) => isPending ? null : isActive ? classes.active : null} to="/">Burger Builder</NavLink></li>
    {props.isAuthenticate ? <li><NavLink className={({isActive, isPending}) => isPending ? null : isActive ? classes.active : null } to="/orders">Orders</NavLink></li>: null}
    {props.isAuthenticate ? 
      <li><NavLink className={({isActive, isPending}) => isPending ? null : isActive ? classes.active : null} to="/logout">Logout</NavLink></li>
    : <li><NavLink className={({isActive, isPending}) => isPending ? null : isActive ? classes.active : null} to="/auth">Sign up</NavLink></li>}
  </ul>
)

export default NavigationItems;