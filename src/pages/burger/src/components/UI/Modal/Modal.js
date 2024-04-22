import React from "react";
import classes from './Modal.css'
import Backdrop from "../Backdrop/Backdrop";
import { Component, Fragment } from "react/cjs/react.development";


class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentDidUpdate(){
        console.log('[Modal] will Update...')
    }
     render(){

        return(
            <Fragment>
            <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
              <div 
              className={classes.Modal}
              style={{transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity : this.props.show ? '1' : '0'}}>
              {this.props.children}
              </div>
      
          </Fragment>
        )
     }
   
}
export default Modal