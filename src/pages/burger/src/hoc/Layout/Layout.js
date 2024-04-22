import React, {Fragment, useState} from 'react'
import classes from "./Layout.css"
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import Sidebar from '../../components/UI/Navigation/Sidebar/Sidebar'

import { connect } from 'react-redux'

const Layout = (props) =>{

    const [showDrawer, setShowDrawer] = useState(false)

    const closeSidebarHandler = () =>{
     setShowDrawer(!showDrawer)
    }

    const showSidebarHandler = () =>{
       setShowDrawer(!showDrawer)
    }


        return(
        <Fragment>
            <Toolbar 
            showSidebar={showSidebarHandler}
            isAuth = {props.isAuthenticated}/>
            <Sidebar 
            show={showDrawer}
            closeSidebar={closeSidebarHandler}
            isAuth={props.isAuthenticated}
            />
           <main className={classes.Content}>
           {props.children}
          </main>
         </Fragment>  
        )
    }
        


const mapStateToProps = state =>{
    return{
        isAuthenticated : state.auth.token !== null
    }
} 

export default connect(mapStateToProps)(Layout)
  


