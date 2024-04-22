import * as actionType from '../actions/actionType'

const initiaState = {
    orders : [],
    loading : false,
    purchasedRedirect : false
}

const orderReducer = (state=initiaState, action) =>{
    switch (action.type) {

        case (actionType.PURCHASE_REDIRECT):
            return {
                ...state,
                purchasedRedirect : false,
            }

        case (actionType.PURCHASE_LOADING):
            return{
                ...state,
                loading : true
        }
    
        case (actionType.PURCHASE_SUCCESS):

            const newOrder = {
                ...action.orderData,
                id : action.orderID,
                }

            return{
                ...state,
                orders : state.orders.concat(newOrder),
                loading : false,
                purchasedRedirect : true   
            }
        case (actionType.PURCHASE_FAILED):
            return{
                ...state,
                loading : false,
            }

        case (actionType.FETCH_ORDER_LOADING):
            return{
                ...state,
                loading : true,
            }

        case (actionType.FETCH_ORDER_SUCCESS):
            return{
                ...state,
                orders : action.orders,
                loading : false,
            }
        
        case (actionType.FETCH_ORDER_FAIL):
            return{
                ...state,
                loading : false,
            }

        case (actionType.REMOVE_ORDER):
            const removedOrder = state.orders.filter(order => order.id !== action.orderId)
            return{
                ...state,
                orders : removedOrder,
            }
        
        default:
            return state
    }   
}

export default orderReducer