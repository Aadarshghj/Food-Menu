import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';
function Menu() {
const[menu,setMenu]=useState([]);
const[items,setItems]=useState([]);
const [selectedMenu, setSelectedMenu] = useState(""); 


useEffect(()=>{
axios.get('http://localhost:5000/api/menus/').then((res)=>{
    setMenu(res.data);


}).catch((err)=>{
    console.log(err)

})


},[])

const clickHandler = (index) =>{
    setSelectedMenu(menu[index].name)
    setItems(menu[index].items);
} 
useEffect(()=>{
    console.log(items)

},[items])
  return (
    <Box
    sx={{
      backgroundColor: '#1c1c1c',
      color: '#fff',
      padding: '2rem',
      borderRadius: '2px ',
      margin: '2rem auto',
      maxWidth: '600px',
      borderColor: '#C0C0C0',  

    }}
  >
    <div>
   {
   menu.map((menu,index)=>(
     <div key={index}>
             <Button variant="outlined" onClick={()=>{
               clickHandler(index)
             }} >{menu.name}</Button>

     </div>

   ))
   }

   <div className='items'>
       {
           selectedMenu && <h1>{selectedMenu}</h1>
       }

{items.length > 0 && (
     <ul>
       {items.map((item, idx) => (
         <li key={idx}>
           <h4>{item.name}</h4>
           <p>{item.description}</p>
           <p>Price: ${item.price}</p>
         </li>
       ))}
     </ul>
   )}

   </div>

<div>


</div>
</div>
   
  </Box>
  )
}

export default Menu