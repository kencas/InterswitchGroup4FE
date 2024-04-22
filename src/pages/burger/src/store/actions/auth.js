import * as actionType from './actionType'
import axios from 'axios'

export const authLoading = () =>{
    return {
        type : actionType.AUTH_LOADING
    }
}

export const authSuccess = (idToken, userId) =>{
    return{
        type : actionType.AUTH_SUCCESS,
        idToken : idToken,
        userId : userId
    }
}

export const authFail = (error) =>{
    return{
        type : actionType.AUTH_FAIL,
        error : error
    }
}

export const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')      
    return{
        type : actionType.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout())
        },
        expirationTime * 1000)
    }
}

export const setAuth = (email, password, isSignup) =>{
    return dispatch =>{
        dispatch(authLoading())

        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDJqFJN17e7PaCLZfx-PpMudPaurjdCmc'

        if(!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDJqFJN17e7PaCLZfx-PpMudPaurjdCmc'
        }
        axios.post(url, authData)
        .then(res =>{
            console.log(res)
            const expirationTime = new Date(new Date().getTime() + (res.data.expiresIn * 1000))
            localStorage.setItem('token', res.data.idToken)
            localStorage.setItem('expirationDate', expirationTime)
            localStorage.setItem('userId', res.data.localId)
            dispatch(authSuccess(res.data.idToken, res.data.localId))
            dispatch(checkAuthTimeout(res.data.expiresIn))
        })
        .catch(err =>{
            console.log(err)
            dispatch(authFail(err.response.data.error))
        })
    }
}

export const setAuthRedirect = (path) =>{
    return{
        type : actionType.SET_AUTH_REDIRECT,
        path : path,
    }
}

export const checkAuthSignIn = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                dispatch(logout())
            }
                else{
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

