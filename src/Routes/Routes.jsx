import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Component/Login'
import Signup from '../Component/Signup'
import Home from '../Component/Home'
import Createnote from '../Component/Createnote'
import Notes from '../Component/Notes'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/note' element={<Notes />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/createnote" element={<Createnote/>}/>
    </Routes>
  )
}

export default AllRoutes