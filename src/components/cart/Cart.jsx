import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import locationIcon from '../../assets/images/locationIcon.png'
import productImage from '../../assets/images/productImage.png'
import { actionAddOrderAsync } from '../../redux/actions/orderActions'
import Swal from "sweetalert2";
import './cart.scss'
const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cart } = useSelector((store) => store.cartStore);
    const user = useSelector((store) => store.userStore);
    const { orders, error } = useSelector((store) => store.orderStore);
    const [deliveryPrice, setDeliveryPrice] = useState(5000)

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleOrder = () => {
        const order = {
            ...cart,
            user: user,
        }
        console.log(order)
        dispatch(actionAddOrderAsync(order));
        navigate('/home')
    }
  return (
    <div className='body'>
    <main className='mainCart container'>
        <section className='mainCart__topSection'>
            <div className='mainCart__titleContainer'>
                <img onClick={handleGoBack} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ic_chevron_left_48px.svg/1200px-Ic_chevron_left_48px.svg.png" width='30px' alt="Go back" />
                <span>New order</span>
            </div>
            <div className='mainCart__deliverTo'>
                <h3>Deliver to</h3>
                <div>
                    <img src={locationIcon} alt='location icon' width='16px' />
                    <p>882 Well St, New-York</p>
                </div>
            </div>
            <div className='mainCart__payment'>
                <h3>Payment</h3>
                <button>Cash</button>
            </div>
            <div className='mainCart__productsContainer'>
                <article className='mainCart__product'>
                    <div>
                        <img src={cart.image} width='44px' height='44px' />
                        <span>{cart.quantity}</span>
                        <h4>{cart.name}</h4>
                    </div>
                    <span className='mainCart__productPrice'>$ {cart.price}</span>
                </article>
            </div>
            <div className='mainCart__note'>
                <h3>Note</h3>
                <input type="text" placeholder='Write something'/>
            </div>
        </section>
        <section className='mainCart__bottom'>
            <div>
                <p>Products</p>
                <span>{cart.price}$</span>
            </div>
            <div>
                <p>Delivery</p>
                <span>{deliveryPrice}$</span>
            </div>
            <hr />
            <div className='mainCart__total'>
                <p>Total</p>
                <h3>{cart.price + deliveryPrice}$</h3>
            </div>
            <button onClick={handleOrder}>Order</button>
        </section>
    </main>
    </div>
  )
}

export default Cart