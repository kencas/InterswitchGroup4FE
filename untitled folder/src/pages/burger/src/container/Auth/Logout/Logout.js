import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index"
import { Navigate } from "react-router-dom";

const Logout = (props) =>{

    useEffect(()=>{
     this.props.onLogout()
    }, [])
 
    return <Navigate to="/" />
    
}


const mapDispatchToProps = dispatch =>{
    return{
        onLogout : () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Logout)
