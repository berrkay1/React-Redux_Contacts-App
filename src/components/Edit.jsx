import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import {contactSelector,updateContact} from '../redux/ContactSlice';
import { useSelector ,useDispatch} from 'react-redux';

function Edit() {

    const {id} = useParams();
    
    const editContacts = useSelector(state => contactSelector.selectById(state,id))
    console.log(editContacts);
    const [name,setName] =useState(editContacts.name);
    const [number,setNumber] = useState(editContacts.phone_number);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !number) return false;
        dispatch(updateContact({
            id:editContacts.id,
            changes:{
                name,
               phone_number: number,
            },
        }))
    }

  return (
    <div className='form'  style={{background:'#94a370'}} >
        <h2  style={{marginBottom:30,color:'#fff',fontWeight:'bold'}}>Edit</h2>
        <form onSubmit={handleSubmit} >
            <input placeholder='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <input placeholder='phone_number' type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />

            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
            <button type='submit'>Update</button>
            
            </div>
            
        </form>
</div>
  )
}

export default Edit