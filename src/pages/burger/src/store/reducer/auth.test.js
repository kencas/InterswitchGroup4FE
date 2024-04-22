import auth from "./auth-reducer";
import * as actionTypes from '../actions/actionType'

describe('auth reducer', ()=>{
    it('should render undefined value when the reducer initially loads', ()=>{
        expect(auth(undefined , {})).toEqual({
            token : null,
            userId : null,
            error : null,
            loading : false,
            authRedirectPage : '/'
        })
    }),

    it('should return a user token when user signup ', ()=>{
        expect(auth({ token : null,
            userId : null,
            error : null,
            loading : false,
            authRedirectPage : '/'}, 
            {
                type : actionTypes.AUTH_SUCCESS,
                idToken : "Some-token",
                userId : "Some-userId"
            })).toEqual({
            token : "Some-token",
            userId : "Some-userId",
            error : null,
            loading : false,
            authRedirectPage : '/'
        })
    })

})