import * as actionType from './actionType'
import axios from '../../axios-order'

export const addIngredients = (igType)=>{
    return{
        type : actionType.ADD_INGREDIENT,
        ingredientType : igType,
    }
}


export const removeIngredients = (igType)=>{
    return{
       
        type : actionType.REMOVE_INGREDIENT,
        ingredientType : igType,
    }
}

 const setIngredients = (ingredients, price) =>{
    return {
        type : actionType.SET_INGREDIENTS,
        ingredients : ingredients,
        totalPrice : price 
    }
}

const fetchError = () =>{
    return{
        type : actionType.FETCH_ERROR
    }
}

export const initIngredients = () =>{
    return dispatch =>{
        axios.get('/ingredients.json')
        .then(res =>{ dispatch(setIngredients(res.data, res.data.totalPrice))})
        .catch(err =>{dispatch(fetchError())})
    }
}



