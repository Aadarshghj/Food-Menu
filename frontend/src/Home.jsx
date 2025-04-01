import React from 'react'
import { Box, Divider } from '@mui/material';
import Menu from './components/Menu';
import  { useEffect, useState } from 'react'

import axios from 'axios';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = () => {
  const[menu,setMenu]=useState([]);
    const[items,setItems]=useState([]);
    const [selectedMenu, setSelectedMenu] = useState("Weclome"); 
    
    
    useEffect(()=>{
    axios.get('http://localhost:5000/api/menus/').then((res)=>{
        setMenu(res.data)
    
    
    }).catch((err)=>{
        console.log(err)
    
    })
    
    
    },[])
    
 
  return (
    <div className='home' style={{backgroundColor:'#000'}} >
        <Navbar/>
        <Hero menu={menu} setMenu={setMenu} items={items} setItems={setItems} selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}/>
        <Divider sx={{ backgroundColor: '#555', marginY: 3 }} />
   
<Menu menu={menu} setMenu={setMenu} items={items} setItems={setItems} selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu} />

        <Footer />

    </div>
  )
}

export default Home
