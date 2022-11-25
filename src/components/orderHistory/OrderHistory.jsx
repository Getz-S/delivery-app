import React, { useEffect, useState } from 'react'
import './orderhistory.scss'
import logoRest from '../../assets/images/logoRest.png'
import homeIcon from '../../assets/images/homeIcon.png'
import searchIcon from '../../assets/images/searchIcon.png'
import historyIconSelected from '../../assets/images/historyIconSelected.png'
import accountIcon from '../../assets/images/accountIcon.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { actionFillOrdersAsync } from '../../redux/actions/orderActions'

const OrderHistory = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector((store) => store.orderStore);
    const user = useSelector((store) => store.userStore);
    const navigate = useNavigate()
    const [ordersUser, setOrdersUser] = useState({})
    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }

    useEffect(() => {
        dispatch(actionFillOrdersAsync())
        getOrdersUser()
    }, [dispatch])

    const getOrdersUser = () => {
        const tempOrdersUser = orders.filter((order) => order.user.accessToken === user.accessToken && order.user.email === user.email && order.user.name === user.name)
        setOrdersUser(tempOrdersUser)
    }


  return (
    <div className='body'>
        <main className='mainHistory'>
            <section className='mainHistory__content'>
                <h1>All orders</h1>
                <div className='mainHistory__list'>
                {
                    ordersUser.length ? (
                        ordersUser.map((order, index) => (
                            <article key={index}>
                                <div className='mainHistory__cardLeft'>
                                    <img src={order.restaurant.image} alt="Restaurant logo" />
                                    <div className='mainHistory__cardInfo'>
                                        <h3>{order.restaurant.name}</h3>
                                        <p>$ {order.price}</p>
                                    </div>
                                </div>
                                <p>Delivered</p>
                            </article>
                        ))
                    ) : (<div>Order history</div>)
                }
                </div>
            </section>
        </main>
        <footer className='footerOrderHistory'>
            <img src={homeIcon} alt="home icon" onClick={() => {handleFooterButtons('home')}}/>
            <img src={searchIcon} alt="search icon" onClick={() => {handleFooterButtons('search')}}/>
            <img src={historyIconSelected} alt="history icon" onClick={() => {handleFooterButtons('orderhistory')}}/>
            <img src={accountIcon} alt="account icon" onClick={() => {handleFooterButtons('account')}}/>
        </footer>
    </div>
  )
}

export default OrderHistory