import React from 'react'
import { useSelector } from 'react-redux'
import {contactSelector} from '../redux/ContactSlice';
import Item from './Item';
function List() {
    const contacts = useSelector(contactSelector.selectAll);
    
    
  return (
    <ul className='list'>
    {
        contacts.map(item => (
            <Item  item={item}/>
        ))
    }
</ul>
  )
}

export default List