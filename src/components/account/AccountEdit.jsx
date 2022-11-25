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

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
        <main className='mainAccount'>
        <img onClick={handleGoBack} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ic_chevron_left_48px.svg/1200px-Ic_chevron_left_48px.svg.png" width='30px' alt="Go back" />
            <div className='mainAccount__info'>
                <img src={user.avatar} alt="Profile image" />
            </div>
            <section className='mainAccount__options'>
                <article>
                    <div onClick={()=>{handleFooterButtons('accountEdit')}} className='mainAccount__optionName'>
                        <img src='' alt="" />
                        <p>Name</p>
                        <p>{user.name}</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src='#' alt="" />
                        <p>password</p>
                        <p>.........</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src='#' alt="" />
                        <p>Phone Number</p>
                        <p>{user.phoneNumber}</p>
                    </div>
                    <img src="#" alt="" />
                </article>
            </section>
        </main>
    </div>
  )
}

export default Account