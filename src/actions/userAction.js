import { auth, facebookProvider, googleProvider } from '../firebase'
import { GET_USER } from '../actionTypes'

export function getUser() {
    return dispatch => {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
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