import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { addCartSync } from '../../redux/actions/cartActions'
import './plato.scss'

const Plato = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { restaurants } = useSelector((store) => store.restaurantsStore);
    const { platos } = useSelector((store) => store.platosStore);
    const { cart } = useSelector((store) => store.cartStore);
    const { name, platoName } = useParams()
    const [count, setCount] = useState(1)
    const [platoRest, setPlatoRest] = useState({})
    const [restaurant, setRestaurant] = useState({})
    const [price, setPrice] = useState(platoRest.price)

    const tempPlato = platos.find((plato) => plato.name.toLowerCase().replace(" ", "").replace(" ", "").replace(" ","") === platoName)
    useEffect(() => {
      console.log(name + platoName)
      console.log()
      getRestAndPlato()
    }, [])

    const getRestAndPlato = () => {
      const tempRest = restaurants.find((rest) => rest.name.toLowerCase().replace(" ", "").replace(" ", "").replace(" ","") === name)
      // const tempPlato = platos.find((plato) => plato.name.toLowerCase().replace(" ", "").replace(" ", "").replace(" ","") === platoName)
      setPlatoRest(tempPlato)
      setRestaurant(tempRest)
      setPrice(tempPlato.price)
      console.log(tempPlato.price)
    }
    

    const handleGoBack = () => {
        navigate(-1)
      }

      const handleLess = () => {
        if (count > 1) {
          let temp = count;
          setCount(temp - 1)
          if(price > platoRest.price) {
            setPrice(price - platoRest.price)
          } else {
            setPrice(platoRest.price)
          }
        }
      }
    
      const handlePlus = () => {
        let temp = count;
        setCount(temp + 1)
        setPrice(price + platoRest.price)
      }

      const handleAddToCart = () => {
        const tempCart = {
          name: platoRest.name,
          quantity: count,
          price: price,
          image: platoRest.image,
          restaurant: restaurant,
        }
        dispatch(addCartSync(tempCart))
        navigate('/cart')
        console.log('click')
      }

  return (
    <div className='body'>
      <header className='headerPlato' style={{backgroundImage: `url(${platoRest.image})`}}>
        <div onClick={handleGoBack} className='headerPlato__GoBack'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ic_chevron_left_48px.svg/1200px-Ic_chevron_left_48px.svg.png" width="30px" alt="go back" />
        </div>
      </header>
      <main className='mainPlato'>
        <section className='mainPlato__info container'>
          <div className='mainPlato__infoTop'>
            <h1>{platoRest.name}</h1>
            <p>{platoRest.description}</p>
          </div>
          <div className='mainPlato__ingredients'>
            <h3>Ingredients</h3>
            <p>{platoRest.ingredients}</p>
          </div>
        </section>
      </main>
      <div className='buySection'>
        <section className='buySection__container container'>
          <div className='buySection__counter'>
            <button onClick={handleLess}>-</button>
            <span>{count}</span>
            <button onClick={handlePlus}>+</button>
          </div>
          <div onClick={handleAddToCart} className='buySection__addButton'>
            <p>Add</p>
            <span>${price}</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Plato