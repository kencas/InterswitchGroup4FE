import React from "react";
import classes from './InputForm.css'

const InputForm = (props)=>{

    let inputElement = null;
    let validationerror = null
    const inputClasses = [classes.InputElement]

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
        validationerror = <p className={classes.ValidationError}>Please enter a valid value!</p>
    }

    switch (props.elementtype) {
        case 'input':
            inputElement = <input className={inputClasses.join(' ')} 
            {...props.elementconfig}
             value={props.value} onChange={props.changed}/>
            break;

            case 'textarea':
                inputElement = <textarea className={inputClasses.join(' ')}
                 {...props.elementconfig} value={props.value}/>
                break;

            case 'select':
                inputElement = <select className={inputClasses.join(' ')}
                value={props.value} onChange={props.changed}>  
                    {props.elementconfig.options.map(option =>{
                        return <option 
                        key={option.value}
                        value={option.value}>{option.displayValue}</option>
                    })}
                </select>
               break;
    
        default:
            inputElement = <input className={classes.InputElement} 
            {...props.elementconfig} value={props.value} onChange={props.changed}/>
            break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationerror}
        </div>
    )
}

export default InputForm