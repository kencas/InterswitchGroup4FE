import * as actionTypes from '../actions/actionType'

const initialState = {
    token : null,
    userId : null,
    error : null,
    loading : false,
    authRedirectPage : '/'
}

const auth = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.AUTH_LOADING:
            return{
                ...state,
                loading : true
            }
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token : action.idToken,
                userId : action.userId,
                loading : false
            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error : action.error,
                loading : false,
            }

        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                token : null,
                userId : null
            }
        case actionTypes.SET_AUTH_REDIRECT:
            return{
                ...state,
                authRedirectPage : action.path
            }
        default:
            return state;
    }
}

export default auth