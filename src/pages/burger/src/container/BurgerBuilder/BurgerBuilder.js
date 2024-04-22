import React, {useState, useEffect, Fragment} from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-order";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import {Navigate} from 'react-router-dom'



export const BurgerBuilder = (props) => {
    const [showSummary, setShowSummary] = useState(false);
    const [error, setError] = useState(false)

   
     const OrderNowHandler = () =>{
        const sum  = Object.keys(props.ing).map(igKey =>{
            return props.ing[igKey]
        }).reduce((prev, curr)=>{
            return prev + curr;
        }, 0)

        return sum > 0;
    }

    // addIngredientHandler = (ingredient)=>{
    //     const oldIngredients = this.state.ingredients[ingredient]
    //     const addedValue = oldIngredients + 1
    //     const updatedingredient = {...this.state.ingredients}
    //     updatedingredient[ingredient] = addedValue

    //     const ingredientPrice = INGREDIENT_PRICE[ingredient]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice + ingredientPrice
    //     this.setState({ingredients : updatedingredient,
    //                     totalPrice : newPrice})

    //     this.OrderNowHandler(updatedingredient)

    // }

    // removeIngredientHandler = (ingredient)=>{

    //     const oldIngredients = this.state.ingredients[ingredient]
    //     if(oldIngredients <= 0){
    //         return
    //     }
    //     const addedValue = oldIngredients - 1
    //     const updatedingredient = {...this.state.ingredients}
    //     updatedingredient[ingredient] = addedValue


    //     const ingredientPrice = INGREDIENT_PRICE[ingredient]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice - ingredientPrice
    //     this.setState({ingredients : updatedingredient,
    //         totalPrice : newPrice})
    //     this.OrderNowHandler(updatedingredient)
    // }
    
    const displayOrderHandler = () => {
        if(props.isAuthenticated){
            setShowSummary(true)
        }
        else{
            
            props.onSetRedirectPath('/checkout'); 
            return <Navigate to="/auth"/>
            
        }
    }
     const modalCloseHandler = () => {
        setShowSummary(false)
    }

    const continuePurchaseHandler = ()=>{
        props.onPurchasedRedir()
        return  <Navigate to="/checkout" />

        // const queryParams = [];

        // for( let i in this.state.ingredients){
        //     queryParams.push(encodeURI(i) + '=' + encodeURI(this.state.ingredients[i]) )
        // }

        // const queryString = queryParams.join('&')
        // this.setState({loading : true})
        // const data = {
        //     ingredients : this.state.ingredients,
        //     price : this.state.totalPrice
        // }
        // axios.post('/orders.json', data)
        //     .then(res =>{this.setState({loading: false, showSummary : false})})
        //     .catch(err =>{this.setState({loading: false, showSummary : false})})
        // this.props.history.push({
        //     pathname : '/checkout',
        // })
    }

    useEffect(()=>{
        let time = new Date(new Date().getTime() + (3600 * 1000))
        console.log(new Date())
        console.log(time)

        //this.props.onIngredientSet()
        props.onIngredientSet()

    }, [])
     
     
   

        const disabledInfo = {
            ...props.ing};
        for(let i in disabledInfo){
            disabledInfo[i] = disabledInfo[i] <= 0
        }
        
        let orderSummary = null

        let burger = props.error ?<p>Cannot load this page</p> :<Spinner />
            if(props.ing){
                burger = (
                        <Fragment>
                            <Burger ingredients={props.ing}/>
                            <BuildControls
                            addIngredient={props.onIngredientAdd}
                            removeIngredient={props.onIngredientRemove}
                            totalPrice={props.price}
                            disabledInfo = {disabledInfo}
                            orderNow = {OrderNowHandler()}
                            orderSummary={displayOrderHandler}
                            isAuth = {props.isAuthenticated}
                            />
                        </Fragment>
                      
                         );
                orderSummary = <OrderSummary
                cancelPurchase = {modalCloseHandler}
                continuePurchase = {continuePurchaseHandler}
                ingredients = {props.ing}
                totalPrice={props.price} />
            }
         
        return(
            <Fragment>
                <Modal show={showSummary}
                    modalClose={modalCloseHandler}>
                   {orderSummary}
                </Modal>
                    {burger}       
                
            </Fragment>
        )

}

const mapStateToProps = state =>{
    return{
        ing : state.reducer.ingredients,
        price : state.reducer.totalPrice,
        error : state.reducer.error,
        isAuthenticated : state.auth.token !== null

        
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIngredientAdd : (igType)=> dispatch(actions.addIngredients(igType)),
        onIngredientRemove : (igType)=> dispatch(actions.removeIngredients(igType)),
        onIngredientSet : ()=> dispatch(actions.initIngredients()),
        onPurchasedRedir : () => dispatch(actions.purchaseRedirect()),
        onSetRedirectPath : (path) => dispatch(actions.setAuthRedirect(path))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))