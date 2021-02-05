import React , {useEffect} from 'react'
import { Button } from '@material-ui/core'
import { auth , provider} from "../firebase";

import '../css/Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider"

import db from '../firebase'
import firebase from 'firebase'
var firebaseui = require('firebaseui');
const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default function Login(){
    const createUser = (uid,email, displayName, photoURL) => {
        db.collection('users').doc(email).set({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL || `https://avatars.dicebear.com/api/gridy/${uid}.svg?background=%23ebf1ff`,
            friends: [],
            messages: [],
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    };

    const [{} , dispatch ]  = useStateValue();

    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: authResult.user,
                });
                // if (!db.collection('users').doc(authResult.user.uid)){
                    createUser(authResult.user.uid,authResult.user.email, authResult.user.displayName, authResult.user.photoURL)
                // };
                return true;
            },
            uiShown: function() {
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        // signInSuccessUrl: '/account',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        // tosUrl: '<your-tos-url>',
        // Privacy policy url.
        // privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    
    ui.start('#firebaseui-auth-container', uiConfig);

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) =>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                // if (db.collection('users').doc(result.user.email) == null || db.collection('users').doc(result.user.email) == undefined){
                createUser(result.user.email,result.user.email, result.user.displayName, result.user.photoURL)
                // }

            })
            .catch((error) => alert(error.message));
    };
    return(
        <div className='login'>
            <div className='login__container'>
                <div className='login__text'>
                    <h1>Sign into ChatiZone</h1>
                </div>
                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>
                <Button onClick={signIn}>Login with Google</Button>
            </div>
        </div>
    );
}