import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/account/Account'
import AccountEdit from '../components/account/AccountEdit'
import Cart from '../components/cart/Cart'
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
      <Route path='/restaurant/:name' element={<Restaurant/>} />
      <Route path='restaurant/:name/:platoName' element={<Plato />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/accountEdit' element={<AccountEdit />} />
    </Routes>
  )
}

export default DashboardRouter