import { auth, facebookProvider, googleProvider } from '../firebase'

export function googleLogin() {
    return dispatch => auth.signInWithPopup(googleProvider)
}

export function facebookLogin() {
    return dispatch => auth.signInWithPopup(facebookProvider)
}