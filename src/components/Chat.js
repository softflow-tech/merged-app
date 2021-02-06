import React, {useState , useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Avatar , IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import db from '../firebase'
import { useStateValue } from "../components/StateProvider";

import '../css/Chat.css'

export default function Chat(){
    const dummy = useRef();
    const { roomId } = useParams();
    const [ room , setRoom ] = useState("");
    const [{user}, dispatch ] = useStateValue();
    const messagesRef = db.collection('rooms').doc(roomId).collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
  
    console.log(dispatch)

    useEffect(() =>{
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
                setRoom(snapshot.data()));
        }
    } , [roomId])
    
  
    const sendMessage = async (e) => {
        e.preventDefault();
        const { email, displayName } = user;
  
        messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email,
            displayName
        })
  
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={room.imageURL} />
                <div className='chat__headerInfo'>
                    <h3>{room.name}</h3>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>  
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton> 
                </div>
            </div>
            <div className='chat__body'>
                {messages && messages.map(msg =><ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </div>   
            <div className='chat__footer'>
                <form>
                    <input value={formValue} onChange={(e)=>setFormValue(e.target.value)} type='text' placeholder='Type a message' />
                    <button type='submit' onClick={sendMessage}><SendIcon /></button>
                </form>
            </div>
        </div>
    );
}

function avataImage(params) {
    var sequence = params
    var matches = sequence.match(/[A-z]/g);
    return(matches.join(''));
}
  
  
function ChatMessage(props) {
    const { text, email, displayName } = props.message;
    const [{user}, dispatch ] = useStateValue();
    console.log(dispatch)

    const messageClass = email === user.email ? 'chat__receiver' : 'false';
    console.log(props.message)
    return (<>

        <div className={`chat__message ${messageClass}`}>
            <span className='chat__name'>
                < Link to={`/account/${email}`}>
                    <Avatar src={`https://avatars.dicebear.com/api/gridy/${avataImage(email)}.svg?background=%23ebf1ff`}/>
                    <p className="displayNames">{displayName}</p>
                </Link> 
            </span>
            {text}
        </div>
    </>)
}
  
