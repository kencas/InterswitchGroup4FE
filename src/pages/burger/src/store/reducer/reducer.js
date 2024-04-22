import * as actionType from '../actions/actionType'


const initialState = {
    ingredients : null,
    totalPrice : 4,
    error : false,
    building : false,
}

const INGREDIENT_PRICE ={
    salad : 0.5,
    onion : 0.3,
    cheese : 0.4,
    chocolate : 1.2,
    bacon : 0.6,
    meat : 1.5
}


const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientType] : state.ingredients[action.ingredientType] + 1
                },
        
                totalPrice : state.totalPrice +  INGREDIENT_PRICE[action.ingredientType],
                building : true,
            }
        
        case actionType.REMOVE_INGREDIENT:
            
            return{
                ...state,
                ingredients :{
                    ...state.ingredients,
                    [action.ingredientType] : state.ingredients[action.ingredientType] - 1
                },
                totalPrice : state.totalPrice -  INGREDIENT_PRICE[action.ingredientType],
                building : true,
            } 
            
        case actionType.SET_INGREDIENTS:
            return{
                ...state,
                ingredients : action.ingredients,
                totalPrice : 4,
                error : false,
                building : false
            }

        case actionType.FETCH_ERROR:
            return{
                 ...state,
                error : true
                }

    
        default:
            return state
    }
}

export default reducer