import React from 'react'
import Form from './Form'
import List from './List'
import { useSelector } from 'react-redux'
import {contactSelector} from '../redux/ContactSlice';

function Contacts() {
    const total = useSelector(contactSelector.selectTotal);

  return (
    <div className='contacts'>
        <h2>Contacts ({total})</h2>
        <List/>
        <Form total={total}/>    
    </div>
  )
}

export default Contacts