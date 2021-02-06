import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { Search } from "@material-ui/icons";

import db from '../firebase'
import ContactsCard from '../components/ContactsCard'
import { useStateValue } from "../components/StateProvider";

import '../css/Contacts.css'

export default function Contacts() {
    const [{ user }, dispatch] = useStateValue();
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    console.log(dispatch)

    useEffect(() => {
        const unsubscribe = db.collection('users').doc(user.email).collection('friends').onSnapshot(snapshot => (
            setUsers(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })
            ))
        ));
        return () => {
            unsubscribe();
        }
    }, [user.email])


    console.log(users);
    return (
        <div className='contacts'>
            <div className='contacts__header'>
                <h1>Contacts</h1>
            </div>
            <div className='contacts__search'>
                <form>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' placeholder='Type an email' />
                    <button type='submit' onSubmit={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} > <Link id='search-link' to={`/account/${searchValue}`}><Search /></Link></button>
                </form>
            </div>

            <div className='contacts__cards'>
                {/* <ContactsCard addNewContact/> */}
                {users && users.map(id => (
                    <ContactsCard id={id.id} />
                ))}
            </div>
        </div>
    )
}
