import React, { useEffect } from 'react'
import './account.scss'
import profileImage from '../../assets/images/Profileimg.png'
import accountEditIcon from '../../assets/images/accountEditIcon.png'
import accountEditNotificationIcon from '../../assets/images/accountEditNotificationIcon.png'
import paymentIcon from '../../assets/images/paymentIcon.png'
import languageIcon from '../../assets/images/languageIcon.png'
import accountLocationIcon from '../../assets/images/accountLocationIcon.png'
import FAQIcon from '../../assets/images/FAQIcon.png'
import supportIcon from '../../assets/images/supportIcon.png'
import homeIcon from '../../assets/images/homeIcon.png'
import searchIcon from '../../assets/images/searchIcon.png'
import historyIcon from '../../assets/images/historyIcon.png'
import accountIconSelected from '../../assets/images/accountIconSelected.png'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const Account = () => {
    const user = useSelector((store) => store.userStore);
    const navigate = useNavigate()

    

    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
        <main className='mainAccount'>
            <div className='mainAccount__info'>
                <img src={user.avatar} alt="Profile image" />
                <p>{user.name}</p>
            </div>
            <section className='mainAccount__options'>
                <article>
                    <div onClick={()=>{handleFooterButtons('accountEdit')}} className='mainAccount__optionName'>
                        <img src={accountEditIcon} alt="" />
                        <p>Account edit</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src={accountEditNotificationIcon} alt="" />
                        <p>Account edit</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src={paymentIcon} alt="" />
                        <p>Payment</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src={languageIcon} alt="" />
                        <p>Language</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src={accountLocationIcon} alt="" />
                        <p>Location</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src={FAQIcon} alt="" />
                        <p>FAQ</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src={supportIcon} alt="" />
                        <p>Support</p>
                    </div>
                    <img src="#" alt="" />
                </article>
            </section>
        </main>
        <footer className='footerAccount'>
            <img src={homeIcon} alt="home icon" onClick={() => {handleFooterButtons('home')}}/>
            <img src={searchIcon} alt="search icon" onClick={() => {handleFooterButtons('search')}}/>
            <img src={historyIcon} alt="history icon" onClick={() => {handleFooterButtons('orderhistory')}}/>
            <img src={accountIconSelected} alt="account icon" onClick={() => {handleFooterButtons('account')}}/>
        </footer>
    </div>
  )
}

export default Account