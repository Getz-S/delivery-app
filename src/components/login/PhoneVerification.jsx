import React from 'react'
import './phoneVerification.scss'
import logo from '../../assets/images/logo.png'

const PhoneVerification = () => {
  return (
    <div className='body'>
    <div className='main'>
        <section className='main__top'>
            <img src={logo} alt="logo" />
            <h1>Veification</h1>
            <p>Enter the four-digit code from SMS<br/>SMS not received.<span> Send again</span></p>
        </section>
        <form className='main__form'>
            <input type="text"  name="pincode" maxlength="4"  id="pin" pattern="\d{4}" required/>
            <div className='main__formBottom'>
                <button>Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default PhoneVerification