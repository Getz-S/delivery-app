import React, { useEffect, useState } from 'react'
import rest1Image from '../../assets/images/rest1.png'
import cardImage from '../../assets/images/cardImage.png'
import './restaurant.scss'
import { Rating } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { actionFillMenusAsync } from '../../redux/actions/menusActions'
import { actionFillPlatosAsync } from '../../redux/actions/platosAction'

const Restaurant = () => {
  // const [load, setLoad] = useState(false)
  const dispatch = useDispatch()
  const [restaurant, setRestaurant] = useState({})
  const [platosRest, setPlatosRest] = useState({})
  const navigate = useNavigate()
  const { restaurants } = useSelector((store) => store.restaurantsStore);
  const { platos } = useSelector((store) => store.platosStore);
  // const { menus } = useSelector((store) => store.menusStore);
  const { name } = useParams()

  useEffect(() => {
    dispatch(actionFillPlatosAsync())

  }, [dispatch]);

  useEffect(() => {
    getRestaurantInfo()
    // getPlatos()
  }, []);

  const getRestaurantInfo = () => {
    let tempRestaurant = restaurants.find((restaurant) => restaurant.name.toLowerCase().replace(" ", "").replace(" ", "") === name)
    let tempPlatosRest = platos.filter((plato) => plato.menu === tempRestaurant.menu)
    // setLoad(true)
    setRestaurant(tempRestaurant)
    setPlatosRest(tempPlatosRest)
  }

  const platoDetail = (plato) => {
    const platoName = plato.name.toLowerCase().replace(" ", "").toLowerCase().replace(" ", "").toLowerCase().replace(" ", "");
    navigate(`/restaurant/${name}/${platoName}`)
}

  // const getPlatos = () => {
  //   console.log(tempPlatosRest)
  // }

  // const getMenusInfo = () => {
  //   let tempMenus
  // }

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
            <img src={restaurant.image} alt="image" />
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
          {

            platosRest.length ? (
              platosRest.map((plato, index) => (
                <article onClick={()=>{platoDetail(plato)}} key={index} className='mainRest__card'>
                  <img src={plato.image} alt="food image" />
                  <h4>{plato.name}</h4>
                  <p>$ {plato.price}</p>
                </article>
              ))
            ):
            (<div>Cargando...</div>)
          }
          </div>
        </section>
      </main>
    </div>
    //   )}

    // </>
  )
}

export default Restaurant