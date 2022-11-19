import React from 'react'
import './loginWithPhone.scss'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const loginWithPhone = () => {
  return (
    <div className='body'>
        <div className='mainLoginPh'>
            <section className='mainLoginPh__top'>
                <img src={logo} alt="logo" />
                <h1>Sign in</h1>
                <p>Login or create an account with your phone number to start ordering</p>
            </section>
            <form className='mainLoginPh__form'>
                <input type="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <div className='mainLoginPh__formBottom'>
                <Link to="/register">¿Desea crear una cuenta?</Link>
                <Link to="/login">Iniciar sesión</Link>
                    <p>By clicking the button next you accept<br/><span>Terms of use</span></p>
                    <button>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default loginWithPhone