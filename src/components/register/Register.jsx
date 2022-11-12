import React from 'react'
import './register.scss'

const Register = () => {
  return (
    <div className='body'>
    <div className='mainRegister'>
        <h1>Create account</h1>
        <form className='mainRegister__form'>
            <div className='mainRegister__formInputs'>
                <label>
                    NAME
                    <input type="text" placeholder='Enter your name'/>
                </label>
                <label>
                    EMAIL
                    <input type="email" placeholder='Enter your E-mail'/>
                </label>
                <label>
                    PASSWORD
                    <input type="password" placeholder='Enter your password'/>
                </label>
            </div>
            <div className='mainRegister__formBottom'>
                <button>Sign In</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register