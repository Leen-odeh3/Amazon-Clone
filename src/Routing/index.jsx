import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Forms/Login/Login'

const index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default index
