import React from 'react'
import './login.scss'
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { loginProvider, schemaLogin } from "../../services/data";
import { actionLoginAsync, loginProviderAsync } from "../../redux/actions/userActions";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch=useDispatch()
  const {register, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(schemaLogin)})
  const onSubmit = (data) => {
    
    dispatch(actionLoginAsync(data))
  }

  const handleLoginGoogleOrFacebook = (provider) => {
    dispatch(loginProviderAsync(provider))
  }
  return (
    <div className='body'>
    <div className='mainLogin'>
        <h1>Login</h1>
        <form className='mainLogin__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='mainLogin__formInputs'>
                <label>
                    EMAIL
                    <input type="email" placeholder='Enter your E-mail' {...register("email")}/>
                    <p>{errors.email?.message}</p>
                </label>
                <label>
                    PASSWORD
                    <input type="password" placeholder='Enter your password' {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </label>
                
            </div>
            {
        loginProvider.map((provider, index) =>(
          <img key={index} src={provider.image} alt={provider.name} style={{width: 50, marginLeft: 30}} 
          onClick={()=>{handleLoginGoogleOrFacebook(provider.provider)}} />
        ))
      }
            <div className='mainLogin__formBottom'>
            
            <Link to="/register">¿Desea crear una cuenta?</Link>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login