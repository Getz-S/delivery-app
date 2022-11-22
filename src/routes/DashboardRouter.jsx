import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/account/Account'
import Home from '../components/home/Home'
import OrderHistory from '../components/orderHistory/OrderHistory'
import Plato from '../components/platos/Plato'
import Restaurant from '../components/restaurant/Restaurant'
import Search from '../components/search/Search'

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/search' element={<Search/>} />
      <Route path='/orderhistory' element={<OrderHistory />} />
      <Route path='/account' element={<Account />} />
      <Route path='/plato' element={<Plato />} />
      <Route path='/restaurant/:name' element={<Restaurant/>} />
    </Routes>
  )
}

export default DashboardRouter