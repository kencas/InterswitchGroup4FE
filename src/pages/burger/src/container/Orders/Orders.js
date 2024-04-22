import React, {useEffect, Fragment} from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-order";
import * as actions from '../../store/actions/index'
import { connect } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";


const Orders = (props) =>{


    useEffect(()=>{
        props.onfetchOrder(props.token, props.userId)
    },[])
 
        let order = <Spinner/>
        if(!props.loading){
            order = props.orders.map(ig =>{
                return <Order
                key={ig.id}
                ingredients={ig.ingredients}
                price={+ig.price}
                removeOrder={()=>props.onRemoveOrder(ig.id)}/>
            })
            
        }
        return(
            <Fragment>
               {order}
            </Fragment>
           
        )
}

const mapStateToProps = state =>{
    return{
        orders : state.orderReducer.orders,
        loading : state.orderReducer.loading,
        token : state.auth.token,
        userId : state.auth.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onfetchOrder : (token, userId) => dispatch(actions.setfetchedOrder(token, userId)),
        onRemoveOrder : (id) =>dispatch(actions.removeOrder(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))