import { TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addform = () => {

      const[val,setVal] =useState({});
      const navigate= useNavigate();
      const changeHandler = (e) =>{

setVal({...val,[e.target.name]:e.target.value})

      }
      const addHandler = () =>{
axios.post('http://localhost:5000/api/menus',val).then((res)=>{

setVal({name:"",description:""})
navigate('/home')

}).catch((err)=>{
console.log(err)
})


      }


  return (
    <div style={{ display:'flex' , flexDirection:'column' }}>
            <TextField id="outlined-basic" label="Name" onChange={changeHandler} name="name"  variant="outlined" />
            <TextField id="outlined-basic" label="Description" name="description"  onChange={changeHandler} variant="outlined" />

            <button onClick={addHandler}> Add</button>
    </div>
  )
}

export default Addform
