import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardRouter from './DashboardRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import LoginWithPhone from '../components/login/LoginWithPhone'
import EnterAdress from '../components/register/EnterAdress'
import Register from '../components/register/Register'
import PhoneVerification from '../components/login/PhoneVerification'

const Router = () => {
    const { isLoggedIn, setIsLoggedIn } = useState(undefined)
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PublicRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/' element={<LoginWithPhone />} />
                <Route path='/register' element={<Register />} />
                <Route path='/enterAdress' element={<EnterAdress />} />
                <Route path='/phoneVerification' element={<PhoneVerification />} />
            </Route>
            <Route element={<PrivateRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/*' element={<DashboardRouter />} />
            </Route>
            {/* <Route path='*' element={<NoMatch/>} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Router