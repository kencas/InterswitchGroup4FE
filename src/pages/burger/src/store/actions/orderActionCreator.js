import * as actionType from './actionType'
import axios from '../../axios-order'

export const purchaseSuccess = (orderData, id)=>{
    return{
        type : actionType.PURCHASE_SUCCESS,
        orderData : orderData,
        orderID : id
    }
}

export const purchaseFailed =(error) =>{
    return{
        type : actionType.PURCHASE_FAILED,
        error : error
    }
}

export const loadingOrder = () =>{
    return {
        type : actionType.PURCHASE_LOADING
    }
}

export const setPurchaced = (orderData, token) =>{
    return dispatch =>{
        dispatch(loadingOrder())
        axios.post('/orders.json?auth=' + token, orderData)
        .then(res => dispatch(purchaseSuccess(res.data, orderData)))
        .catch(err => dispatch(purchaseFailed(err)))
    }
}

export const purchaseRedirect = () =>{
    return{
        type : actionType.PURCHASE_REDIRECT
    }
}

export const fetchOrderSuccess = (order) =>{
    return{
        type : actionType.FETCH_ORDER_SUCCESS,
        orders : order
    }
}

export const fetchOrderFail = (error) =>{
    return{
        type : actionType.FETCH_ORDER_FAIL,
        error : error
    }
}

export const fetchOrderLoading = () =>{
    return{
        type : actionType.FETCH_ORDER_LOADING,

    }
}

export const setfetchedOrder = (token, userId) =>{
    return dispatch =>{
        dispatch(fetchOrderLoading())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId +'"'
        axios.get('orders.json?auth=' + queryParams)
            .then(res => {
                const fetchOrder = []
                for (let key in res.data){
                    fetchOrder.push({
                        ...res.data[key],
                        id : key })} 
                        
                dispatch(fetchOrderSuccess(fetchOrder))})
            .catch(err => { dispatch(fetchOrderFail(err))})
    }
}

export const removeOrder = (ordId) =>{
    return {
        type : actionType.REMOVE_ORDER,
        orderId : ordId
    }
}

