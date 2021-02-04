import React , {useEffect} from 'react'
import { Button } from '@material-ui/core'
import { auth , provider} from "../firebase";

import '../css/Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider"

import db from '../firebase'


export default function Login(){
    const createUser = (uid,email, displayName, photoURL) => {
        db.collection('users').doc(email).set({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
            friends: [],
            messages: [],
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    };

    const [{} , dispatch ]  = useStateValue();

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
                <Button onClick={signIn}>Login with Google</Button>
            </div>
        </div>
    );
}