import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom'

import { Avatar } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import db from '../firebase'

import '../css/Contacts.css'

export default function ContactsCard({id, addNewContact}) {

    const [ userDetails , setUserDetails ] = useState([]);
    useEffect( () => {
        const unsubscribe = db.collection('users').doc(id).onSnapshot(snapshot =>(setUserDetails(snapshot.data())));
        return () => {
            unsubscribe();
        }
    },[id]);

    const findFriend = () => {

    };

    return !addNewContact ? (
        <div  className='contactCard'> 
            < Link to={`/account/${userDetails.email}`}>
                <Avatar src={userDetails.photoURL}/>
                <div className='contactCard__info'>
                    <h2>{userDetails.displayName}</h2>
                </div>
            </Link> 
        </div>
    ) : (
       <div onClick={findFriend} className='contactCard'>
           <h2 className='find'><PersonAddIcon /> Find Friends</h2>  
       </div> 
    )
}