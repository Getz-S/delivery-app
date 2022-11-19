import React from 'react'
import './orderhistory.scss'
import logoRest from '../../assets/images/logoRest.png'
import homeIcon from '../../assets/images/homeIcon.png'
import searchIcon from '../../assets/images/searchIcon.png'
import historyIconSelected from '../../assets/images/historyIconSelected.png'
import accountIcon from '../../assets/images/accountIcon.png'
import { useNavigate } from 'react-router'

const OrderHistory = () => {
    const navigate = useNavigate()
    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
        <main className='mainHistory'>
            <section className='mainHistory__content'>
                <h1>All orders</h1>
                <div className='mainHistory__list'>
                    <article>
                        <div className='mainHistory__cardLeft'>
                        <img src={logoRest} alt="Restaurant logo" />
                        <div className='mainHistory__cardInfo'>
                            <h3>Pardes restaurant</h3>
                            <p>$ 132.00</p>
                        </div>
                        </div>
                        <p>Delivered</p>
                    </article>
                    <article>
                        <div className='mainHistory__cardLeft'>
                        <img src={logoRest} alt="Restaurant logo" />
                        <div className='mainHistory__cardInfo'>
                            <h3>Pardes restaurant</h3>
                            <p>$ 240.00</p>
                        </div>
                        </div>
                        <p>Cancelled</p>
                    </article>
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