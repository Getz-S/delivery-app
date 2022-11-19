import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/account/Account'
import Home from '../components/home/Home'
import OrderHistory from '../components/orderHistory/OrderHistory'
import Search from '../components/search/Search'

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/search' element={<Search/>} />
      <Route path='/orderhistory' element={<OrderHistory />} />
      <Route path='/account' element={<Account />} />
    </Routes>
  )
}

export default DashboardRouter