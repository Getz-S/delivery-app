import React, { useEffect, useState } from 'react'
import rest1Image from '../../assets/images/rest1.png'
import cardImage from '../../assets/images/cardImage.png'
import './restaurant.scss'
import { Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'

const Restaurant = () => {
  // const [load, setLoad] = useState(false)

  const [restaurant, setRestaurant] = useState({})
  const navigate = useNavigate()
  const { restaurants } = useSelector((store) => store.restaurantsStore);
  const { name } = useParams()

  useEffect(() => {
    getRestaurantInfo()
    console.log(restaurant)
  }, []);

  const getRestaurantInfo = () => {
    let tempRestaurant = restaurants.find((restaurant) => restaurant.name.toLowerCase().replace(" ", "").replace(" ", "") === name)
    // setLoad(true)
    setRestaurant(tempRestaurant)
  }

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    // <>
    //   {load && (
        <div className='body'>
      <header className='headerRest'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ic_chevron_left_48px.svg/1200px-Ic_chevron_left_48px.svg.png" width="30px" alt="go back" onClick={handleGoBack} />
        <section className='headerRest__container container'>
          <figure>
            <img src={rest1Image} alt="image" />
          </figure>
          <div className='headerRest__info'>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <Rating name="read-only" value={4} size="small" readOnly />
          </div>
        </section>
      </header>
      <main className='mainRest'>
        <section className='mainRest__container container'>
          <span>Menu</span>
          <div className='mainRest__cardsContainer'>
            <article className='mainRest__card'>
              <img src={cardImage} alt="food image" />
              <h4>Bolognese salad</h4>
              <p>$ 14.45</p>
            </article>
            <article className='mainRest__card'>
              <img src={cardImage} alt="food image" />
              <h4>Bolognese salad</h4>
              <p>$ 14.45</p>
            </article>
            <article className='mainRest__card'>
              <img src={cardImage} alt="food image" />
              <h4>Bolognese salad</h4>
              <p>$ 14.45</p>
            </article>
            <article className='mainRest__card'>
              <img src={cardImage} alt="food image" />
              <h4>Bolognese salad</h4>
              <p>$ 14.45</p>
            </article>
          </div>
        </section>
      </main>
    </div>
    //   )}

    // </>
  )
}

export default Restaurant