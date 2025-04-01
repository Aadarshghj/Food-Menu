import { useState } from 'react'


import './App.css'

import { Route, Routes } from 'react-router-dom'
import Addform from './components/Addform'
import Menu from './components/Menu'

import Home from './Home'
import Hero from './components/Hero'

function App() {


  return (
    <>
<Routes>
<Route path='/menu' element={<Menu />} />
<Route path='/Add' element={<Addform/>} />

<Route path='/' element={<Home/>} />
<Route path='/hero' element={<Hero/>} />

</Routes>
     
    </>
  )
}

export default App
