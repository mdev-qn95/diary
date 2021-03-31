import { auth, facebookProvider, googleProvider } from '../firebase'
import { GET_USER, USER_STATUS } from '../actionTypes'

export function getUser() {
    return dispatch => {
        // show loading status before getting user to true
        dispatch({
            type: USER_STATUS,
            payload: true
        })
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            })
            // show loading status to false
            dispatch({
                type: USER_STATUS,
                payload: false
            })
        })
    }
}

export function googleLogin() {
    return dispatch => auth.signInWithPopup(googleProvider)
}

export function facebookLogin() {
    return dispatch => auth.signInWithPopup(facebookProvider)
}

export function logout() {
    return dispatch => auth.signOut()
}