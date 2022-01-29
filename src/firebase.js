import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: 'AIzaSyBR_XtPjuVy2E0JRi_Q5vZWbE38T1f8hn0',
    authDomain: 'login-yamifood.firebaseapp.com',
    projectId: 'login-yamifood',
    storageBucket: 'login-yamifood.appspot.com',
    messagingSenderId: '1026839657858',
    appId: '1:1026839657858:web:54133d6a4f5a426d22239b'
})

export const auth = app.auth()
export default app