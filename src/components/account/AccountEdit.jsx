import React, { useEffect } from 'react'
import './account.scss'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { schemaRegister } from '../../services/data'
import { fileUpLoad } from '../../services/fileUpload'
import { Form } from 'react-router-dom'

const AccountEdit = () => {
    const user = useSelector((store) => store.userStore);
    const navigate = useNavigate()

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
        console.log(data);
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password,
          avatar: photoUrl,
          phoneNumber: data.phone,
        };
        // dispatch(actionRegisterAsync(newUser));
      };
  return (
    <div className='body'>
        <main className='mainAccount'>
            <div className='mainAccount__info'>
                <img src={user.avatar} alt="Profile image" />
                <p>{user.name}</p>
            </div>
            <form className='mainAccount__options' onSubmit={handleSubmit(onSubmit)}>
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
                <FloatingLabel label="Avatar" className="mb-3">
            <Form.Control type="file" size="sm" {...register("image")} />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </FloatingLabel>
            </div>
            <div className='mainAccount__formBottom'>
                <button type='submit'>Confirm</button>
            </div>
            </form>
        </main>
    </div>
  )
}

export default AccountEdit