import React from 'react'
import { Rating } from "@mui/material";
import './home.scss'
import foodBanner1 from '../../assets/images/foodBanner1.png'
import foodBanner2 from '../../assets/images/foodBanner2.png'
import foodBanner3 from '../../assets/images/foodBanner3.png'
import locationImage from '../../assets/images/locationIcon.png'
import promo1Image from '../../assets/images/Promo1.png'
import rest1Image from '../../assets/images/rest1.png'
import homeIconSelected from '../../assets/images/homeIconSelected.png'
import searchIcon from '../../assets/images/searchIcon.png'
import historyIcon from '../../assets/images/historyIcon.png'
import accountIcon from '../../assets/images/accountIcon.png'
import { useNavigate } from 'react-router';
import { actionLogoutAsync } from '../../redux/actions/userActions';
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }
    const logOut = () => {
        dispatch(actionLogoutAsync());
      };
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
                <button onClick={logOut}>Logout</button>
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
                <button className='buttonAll'>All</button>
                <button>Fast food</button>
                <button>Pizza</button>
                <button>Caffe</button>
            </div>
            <section className='mainHome__restCardsContainer'>
                <article className='mainHome__restCard'>
                    <figure>
                        <img src={rest1Image} alt="image" />
                    </figure>
                    <div className='mainHome__restCardInformation'>
                        <h3>Pardes Restaurant</h3>
                        <Rating name="read-only" value={4} size="small" readOnly />
                        <p>Work time 09:30 - 23:00</p>
                        <span>Before you 4$</span>
                    </div>
                </article>
                <article className='mainHome__restCard'>
                    <figure>
                        <img src={rest1Image} alt="image" />
                    </figure>
                    <div className='mainHome__restCardInformation'>
                        <h3>Pardes Restaurant</h3>
                        <Rating name="read-only" value={4} size="small" readOnly />
                        <p>Work time 09:30 - 23:00</p>
                        <span>Before you 4$</span>
                    </div>
                </article>
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