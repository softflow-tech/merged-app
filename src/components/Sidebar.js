import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import db from '../firebase'
import SidebarChat from './SidebarChat'
import { useStateValue } from "../components/StateProvider";

import '../css/Sidebar.css'

export default function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    
    console.log(dispatch)

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })
            ))
        ));
        return () => {
            unsubscribe();
        }
    }, []);

    const slideRight = () => {
        document.getElementById('root').style.left = '-100%';
    };

    const signOut = () => {
        // firebase.auth().signOut();
        window.location.reload(false);
    }


    return (
        <div className='sidebar'>
            {/* <h1>sidebar</h1> */}
            <div className='sidebar__header'>
                < Link to={`/account/${user.email}`}>
                    <Avatar src={`https://avatars.dicebear.com/api/gridy/${avataImage(user.email)}.svg?background=%23ebf1ff`} />
                </ Link>
                <div className='sidebar__headerRight'>
                    <Link to='/contacts'>
                        <IconButton>
                            <ContactsIcon />
                        </IconButton>
                        <IconButton>
                            <ChatIcon onClick={slideRight} />
                        </IconButton>
                        <IconButton>
                            <ExitToAppIcon onClick={signOut} />
                        </IconButton>
                    </Link>
                </div>
            </div>
            <div className='sidebar__chats'>

                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} url={room.data.imageURL} />
                ))}

            </div>
        </div>
    )
}

function avataImage(params) {
    var sequence = params
    var matches = sequence.match(/[A-z]/g);
    return (matches.join(''));
}
