import React from 'react'
import {deleteContact} from '../redux/ContactSlice';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function Item({item}) {
    const dispatch = useDispatch();

    const hendleDelete = (id) => {
        if(window.confirm('are you sure ?')){
            dispatch(deleteContact(id))
        }
    }
    
  return (
    <li className='items'>
        <span>{item.name}</span>
        <span>{item.phone_number}</span>
        <div>
          <Link to={`/edit/${item.id}`}> 
          <span style={{marginRight:20,
        cursor:'pointer',color:'yellow'}}>edit</span>
          </Link>
        
        <span className='delete-btn' onClick={()=>hendleDelete(item.id)} >X</span>
        </div>
    </li>
  )
}

export default Item