import React from 'react'
import './register.scss'
import { schemaRegister } from "../../services/data";
import { fileUpLoad } from "../../services/fileUpload";
import { useDispatch } from "react-redux";
import { actionRegisterAsync } from "../../redux/actions/userActions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schemaRegister),
    });
    const onUpLoadImage = async (image) => {
      const url = await fileUpLoad(image);
      if (url) {
        return url;
      } else {
        console.log("Ocurrió un error al cargar la imagen");
      }
    };
    const onSubmit = async (data) => {
      const photoUrl = await onUpLoadImage(data.image[0]);
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: photoUrl,
        phoneNumber: data.phone,
      };
      dispatch(actionRegisterAsync(newUser));
    };
  return (
    <div className='body'>
    <div className='mainRegister'>
        <h1>Create account</h1>
        <form className='mainRegister__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='mainRegister__formInputs'>
                <label>
                    NAME
                    <input type="text" placeholder='Enter your name' {...register("name")}/>
                    <p>{errors.name?.message}</p>
                </label>
                <label>
                    EMAIL
                    <input type="email" placeholder='Enter your E-mail' {...register("email")}/>
                    <p>{errors.email?.message}</p>
                </label>
                <label>
                    PHONE NUMBER
                    <input type="number" placeholder='Enter your phone number' {...register("phone")}/>
                    <p>{errors.phone?.message}</p>
                </label>
                <label>
                    PASSWORD
                    <input type="password" placeholder='Enter your password' {...register("password")}/>
                    <p>{errors.password?.message}</p>
                </label>
                <label>
                    CONFIRM PASSWORD
                    <input type="password" placeholder='Enter your password' {...register("repeatPassword")}/>
                    <p>{errors.repeatPassword?.message}</p>
                </label>
                <FloatingLabel label="Avatar" className="mb-3">
            <Form.Control type="file" size="sm" {...register("image")} />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
            </div>
            <div className='mainRegister__formBottom'>
            <Link to="/login">Iniciar sesión</Link>
                <button type='submit'>Sign In</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register