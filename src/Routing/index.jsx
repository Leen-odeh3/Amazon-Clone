import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Forms/Login/Login'
import Signup from '../Forms/Signup/signup'
import Header from '../component/Header/Header'

const index = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default index
