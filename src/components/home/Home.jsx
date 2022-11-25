import React, { useEffect, useState } from 'react'
import { Rating } from "@mui/material";
import './home.scss'
import foodBanner1 from '../../assets/images/foodBanner1.png'
import foodBanner2 from '../../assets/images/foodBanner2.png'
import foodBanner3 from '../../assets/images/foodBanner3.png'
import locationImage from '../../assets/images/locationIcon.png'
import promo1Image from '../../assets/images/Promo1.png'
import homeIconSelected from '../../assets/images/homeIconSelected.png'
import searchIcon from '../../assets/images/searchIcon.png'
import historyIcon from '../../assets/images/historyIcon.png'
import accountIcon from '../../assets/images/accountIcon.png'
import cartIcon from '../../assets/images/cartIcon.png'
import { useNavigate } from 'react-router';
import { actionLogoutAsync } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { actionFillRestaurantsAsync } from '../../redux/actions/restaurantsActions';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { restaurants } = useSelector((store) => store.restaurantsStore);
    const [restFiltered, setRestFiltered] = useState(restaurants)
    const [buttonSelected, setButtonSelected] = useState(0)
    useEffect(() => {
        dispatch(actionFillRestaurantsAsync())
        console.log(restaurants)
        setRestFiltered(restaurants)
    }, [dispatch])

    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }
    const logOut = () => {
        dispatch(actionLogoutAsync());
      };
    
    const restDetail = (restaurant) => {
        const restName = restaurant.name.toLowerCase().replace(" ", "");
        const restName1 = restName.toLowerCase().replace(" ", "");
        navigate(`/restaurant/${restName1}`)
    }

    const filterRestaurants = (value) => {
        if (value === 'all') {
            setRestFiltered(restaurants)
            setButtonSelected(0)
        } else if (value === 'hamburguesas') {
            const hamburguerRest = restaurants.filter((restaurant) => restaurant.category === 'hamburguesa')
            setRestFiltered(hamburguerRest)
            setButtonSelected(1)
            
        } else if (value === 'pizzas') {
            const pizzasRest = restaurants.filter((restaurant) => restaurant.category === 'pizza')
            setRestFiltered(pizzasRest)
            setButtonSelected(2)
            
        } else if (value === 'cafe') {
            const cafeRest = restaurants.filter((restaurant) => restaurant.category === 'cafe')
            setRestFiltered(cafeRest)
            setButtonSelected(3)
        }
    }
  return (
    <div className='body'>
        <header className='header'>
            <div className='header__top'>
                <section>
                <img src={locationImage} alt="location" />
                <div className='header__location'>
                    <span>DELIVER TO</span>
                    <p>882 Well St, New-York</p>
                </div>
                </section>
                <div className='header__topRight'>
                    <button className='header__logOut' onClick={logOut}>Logout</button>
                </div>
            </div>
            <div className='header__promo'>
                <img src={promo1Image} alt="image" />
                <img src={foodBanner1} alt="image" />
                <img src={foodBanner2} alt="image" />
                <img src={foodBanner3} alt="image" />
            </div>
            <p className='header__title'>Restaurants and cafes</p>
        </header>
        <main className='mainHome'>
            <div className='mainHome__searchButtons'>
                <button onClick={()=>{filterRestaurants('all')}} className={buttonSelected === 0 ? 'buttonSelected' : ''}>All</button>
                <button onClick={()=>{filterRestaurants('hamburguesas')}} className={buttonSelected === 1 ? 'buttonSelected' : ''}>Hamburguesa</button>
                <button onClick={()=>{filterRestaurants('pizzas')}} className={buttonSelected === 2 ? 'buttonSelected' : ''}>Pizza</button>
                <button onClick={()=>{filterRestaurants('cafe')}} className={buttonSelected === 3 ? 'buttonSelected' : ''}>Caffe</button>
            </div>
            <section className='mainHome__restCardsContainer'>
                {
                    restaurants && restaurants.length ? (
                        restFiltered.map((restaurant, index) => (
                            <article key={index} className='mainHome__restCard' onClick={()=>{restDetail(restaurant)}}>
                                <figure>
                                    <img src={restaurant.image} alt="image" />
                                </figure>
                                <div className='mainHome__restCardInformation'>
                                    <h3>{restaurant.name}</h3>
                                    <Rating name="read-only" value={4} size="small" readOnly />
                                    <p>Work time 09:30 - 23:00</p>
                                    <span>Before you 4$</span>
                                </div>
                            </article>
                        ))
                    ) : (<></>)
                }
            </section>
        </main>
        <footer className='footerHome'>
            <img src={homeIconSelected} alt="home icon" width='32px' height='32px' onClick={() => {handleFooterButtons('home')}}/>
            <img src={searchIcon} alt="search icon" width='26px' height='26px' onClick={() => {handleFooterButtons('search')}}/>
            <img src={historyIcon} alt="history icon" width='32px' height='32px' onClick={() => {handleFooterButtons('orderhistory')}}/>
            <img src={accountIcon} alt="account icon" width='32px' height='32px' onClick={() => {handleFooterButtons('account')}}s/>
        </footer>
    </div>
  )
}

export default Home