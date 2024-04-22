import React, { Fragment, useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) =>{
 
    return props =>{
        const [err, setErr] = useState(null)
      
            const reqInterceptors = axios.interceptors.request.use(request =>{
                setErr(null)
               
            })
            const resInterceptors = axios.interceptors.response.use(res => res, err =>{
               setErr(err)
            })
     

            useEffect(()=>{
                return () =>{  
                axios.interceptors.request.eject(reqInterceptors),
                axios.interceptors.response.eject(resInterceptors)
                }
            },[reqInterceptors, resInterceptors])
     

       const errorCloseHandler = ()=>{
           setErr(null)
        }

       
        return (
        <Fragment>
            <Modal show={err} modalClose={errorCloseHandler}>
              {err ? err.message: null}
            </Modal>
            <WrappedComponent  {...props}/>
        </Fragment>
           
        )
}

}

export default withErrorHandler