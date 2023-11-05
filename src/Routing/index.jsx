import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Forms/Login/Login'
import Signup from '../Forms/Signup/signup'
import Header from '../component/Header/Header'


const index = () => {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[show,setshow]=useState(true);

  return (
    <BrowserRouter>
   { show && <Header/> }
    <Routes>
        <Route path="/Login" element={<Login show={setshow}/>}/>
        <Route path="/signup" element={<Signup show={setshow}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default index
