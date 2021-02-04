import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom'
import db from '../firebase'
import '../css/SidebarChat.css'
import AddBoxIcon from '@material-ui/icons/AddBox';

export default function SidebarChat({id, name, addNewChat}) {
    const createChat = () => {
        const roomName = prompt("Please enter name for the chat room");
        
        if(roomName) {
            // database entries
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        < Link to={`/rooms/${id}`}>
            <div  className='sidebarChat'> 
                <Avatar />
                <div className='sidebarChat__info'>
                    <h2>{name}</h2>
                </div>
            </div>
        </Link>
    ) : (
       <div onClick={createChat} className='sidebarChat'>
           <h2><AddBoxIcon/> Add New Public Chat</h2>
       </div> 
    )
}