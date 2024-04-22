import React, {Fragment} from "react";
import ContactDetails from "./ContactDetails/ContactDetails";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Routes, Route } from "react-router-dom";
import {connect} from 'react-redux'
import { useNavigate, Navigate} from "react-router-dom";


const Checkout = (props) => {

  const navigate = useNavigate()
    // componentDidMount(){
    //     const query = new URLSearchParams(this.props.location.search)

    //     const ingredients = {}
    //     for(let param of query.entries()){
    //         ingredients[param[0]] = + param[1]
    //     }
    //     this.setState({ingredients : ingredients})
    // }

    const checkoutCancelHandler = () =>{
      // navigate('/checkout')
    }


    const checkoutContinueHandler = () =>{
        navigate('/checkout/contact-data')
    }
   
        /* it is either we load a spiner while waiting for the data to load or fetch or we simply redirect back to the 
           homepage if no data is loaded  */
        //let checkoutSummary = <Spinner/>
        let checkoutSummary = <Navigate to="/"/>
        if(props.ings){
          const purchasedRedir = props.purchased ? <Navigate to="/"/> : null
          checkoutSummary = (
            <Fragment>
            <CheckoutSummary
              ingredients={props.ings}
              onCheckoutCancel={checkoutCancelHandler}
              onCheckoutContinue={checkoutContinueHandler}
            />
            <Routes>
              <Route path="/contact-data" element={<ContactDetails />} />
            </Routes>
              {purchasedRedir}
          </Fragment>
          )
        }
        return checkoutSummary

}

const mapStateToProps = state =>{
  return {
    ings : state.reducer.ingredients,
    purchased : state.orderReducer.purchasedRedirect
  }
}


export default connect(mapStateToProps)(Checkout)