import React, {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from "@material-ui/core";
import ChatListComponent from './ChatList/chatList';

import db from '../firebase'
import '../css/Account.css'
import { useStateValue } from "../components/StateProvider";

export default function Account() {
    let { accountId } = useParams();
    const [{user}, dispatch ] = useStateValue();
    const [ userDetails , setUserDetails ] = useState("");
    if (accountId === undefined){
        accountId = user.email
    }
    const slideRight = () => {
        document.getElementById('root').style.left = '-100%';
        document.getElementById('root').style.animation = 'slide-in 1s';
    
            //get the text by id or predefined or however you wish or passed to function
            var txt = userDetails.email;

            setTimeout(() => {  document.getElementById("new-chat-username").focus(); }, 1300);

            
            document.getElementById("new-chat-username").value = txt;
    };

    useEffect( () => {
        const unsubscribe = db.collection('users').doc(accountId).onSnapshot((snapshot) => setUserDetails(snapshot.data()));
      
        return () => {
            unsubscribe();
        }
    },[]);

    
    // const formHandler = () =>{
    //     db.collection('users').doc(user.uid).add({
    //         email: user.email,
    //         displayName: user.displayName,
    //         photoURL: user.photoURL,
    //     })
    // }
    if (accountId !== user.email){
        return (
            <div className='account'>
                <div className='account__header'>
                    <img src={userDetails?.photoURL} alt='profile_picture' />
                    <h1>{userDetails.displayName}</h1>
                    
                </div>
                <div className='account__info'>
                    <h2>Account information: </h2>
                    <p><b>Email: </b>{userDetails.email}</p>
                    {
                        <IconButton>
                            <ChatIcon onClick={slideRight}/>
                        </IconButton>
                    }
                    {/* <p><b>Last Login: </b>{user.metadata.lastSignInTime}</p> */}
                </div>
    
            </div>
        )
    } else {
        return(
        <div className='account'>
            <div className='account__header'>
                <img src={userDetails?.photoURL} alt='profile_picture' />
                <h1>{userDetails.displayName}</h1>
                    
            </div>
            <div className='account__info'>
                <h2>Account information: </h2>
                <p><b>Email: </b>{userDetails.email}</p>
                <p><b>Last Login: </b>{user.metadata.lastSignInTime}</p>
            </div>

        </div>
        )
    }
}