import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addContact,deleteAllContact} from '../redux/ContactSlice';
import {nanoid} from '@reduxjs/toolkit';


function Form({total}) {

    const [name,setName] = useState();
    const [number,setNumber] = useState();
    const dispatch = useDispatch();

    const handleDeleteAll = () => { 
      

      if(window.confirm('do you want to delete all?')){
        dispatch(deleteAllContact());
      }
    }

    const handleSubmit = (e) =>{
      e.preventDefault();

      if(!name || !number) return false;
      
      dispatch(addContact({ id:nanoid(), name , phone_number:number}))
      setName('');
      setNumber('');
      console.log(number);
    }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit} >
            <input placeholder='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <input placeholder='phone_number' type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />

            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
              <button type='submit'>Add</button>
              { total >0 && <button onClick={handleDeleteAll} className='removeall-btn' >
              Delete All
              </button>}
            </div>
            
        </form>
    </div>
  )
}

export default Form