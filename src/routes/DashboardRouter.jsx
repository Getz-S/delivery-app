import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'

const DashboardRouter = () => {
  return (
    <Routes>
     <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default DashboardRouter