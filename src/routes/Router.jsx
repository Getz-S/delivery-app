import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardRouter from './DashboardRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import LoginWithPhone from '../components/login/LoginWithPhone'
import EnterAdress from '../components/register/EnterAdress'
import Register from '../components/register/Register'
import PhoneVerification from '../components/login/PhoneVerification'
import Login from '../components/login/Login'
import Home from '../components/home/Home'
import Search from '../components/search/Search'
import OrderHistory from '../components/orderHistory/OrderHistory'
import Account from '../components/account/Account'
import { useDispatch, useSelector } from "react-redux";
import { actionLoginSync } from "../redux/actions/userActions";
import { auth } from "../firebase/firebaseConfig";

const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const [check, setCheck] = useState(true);
    const userStore = useSelector((store) => store.userStore);
    const dispatch = useDispatch()
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user?.uid) {
          setIsLoggedIn(true);
          if (Object.entries(userStore).length === 0) {
            const {
              displayName,
              email,
              phoneNumber,
              accessToken,
              photoURL,
              uid,
            } = user.auth.currentUser;
            dispatch(
              actionLoginSync({
                name: displayName,
                email,
                accessToken,
                phoneNumber,
                avatar: photoURL,
                uid,
                error: false,
              })
            );
          }
        } else {
          setIsLoggedIn(false);
        }
        setCheck(false)
  
      }
  
      );
    }, [setIsLoggedIn, dispatch, userStore]);
  
    if (check) {
      return (
          <span>Loading...</span>
      );
    }
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PublicRouter isAuthentication={isLoggedIn}/>}>
                <Route path='/' element={<LoginWithPhone />} />
                <Route path='/login' element={<Login />} />
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