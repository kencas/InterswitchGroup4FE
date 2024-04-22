import React, { useEffect} from 'react';
import Layout from './hoc/Layout/Layout';
import Checkout from './container/checkout/checkout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Auth from './container/Auth/Auth';
import Orders from './container/Orders/Orders';
import {Route, Routes} from 'react-router-dom'
import Logout from './container/Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index'



const App = (props) => {

  useEffect(()=>{
     props.onCheckAuthSignin()
  },[])

  let route = (   
    <Routes>   
      <Route path="/" element={<BurgerBuilder/>} />
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
  )

  if(props.isAuthenticate){
    route = (
    <Routes>   
      <Route path="/checkout/*" element={<Checkout/>} /> 
      <Route path="/orders" element={<Orders/>} />
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
    )
  }
    return (
          <Layout>
            {route}
         </Layout>

 ) }


const mapStateToProps = state =>{
  return{
    isAuthenticate : state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onCheckAuthSignin : () => dispatch(actions.checkAuthSignIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
