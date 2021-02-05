import React , {useState} from "react";
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom'
import db from '../firebase'
import '../css/SidebarChat.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { render } from "@testing-library/react";

export default function SidebarChat({id, name, addNewChat}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    //    <div onClick={createChat} className='sidebarChat'>
       <div className='sidebarChat'>
            <Button variant="light" onClick={handleShow}>
                <h2><AddBoxIcon/> Add New Public Chat</h2>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New Room</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Room Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter room name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Room Icon</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image URL" />
                        </Form.Group>
                            <Form.Text className="text-muted">
                                You are creating a community chat room. 
                                Anyone using this application can view and add to it.
                            </Form.Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Create Room
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
       </div> 
    )
}