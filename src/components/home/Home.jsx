import React from 'react'
import { Rating } from "@mui/material";
import './home.scss'

const Home = () => {
  return (
    <div className='body'>
        <header className='header'>
            <div className='header__top'>
                <img src="../../assets/images/locationIcon.png" alt="location" />
                <div className='header__location'>
                    <span>DELIVER TO</span>
                    <p>882 Well St, New-York</p>
                </div>
            </div>
            <div className='header__promo'>
                <img src="../../assets/images/Promo1.png" alt="image" />
                <img src="../../assets/images/Promo2.png" alt="image" />
            </div>
            <p>Restaurants and cafes</p>
        </header>
        <main className='mainHome'>
            <div className='mainHome__searchButtons'>
                <button>All</button>
                <button>Fast food</button>
                <button>Pizza</button>
            </div>
            <section className='mainHome__restCardsContainer'>
                <article className='mainHome__restCard'>
                    <figure>
                        <img src="../../assets/images/rest1.png" alt="image" />
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
        <footer>
            <img src="../../assets/images/homeIconSelected.png.png" alt="home icon" />
            <img src="../../assets/images/searchIcon.png" alt="search icon" />
            <img src="../../assets/images/historyIcon.png" alt="history icon" />
            <img src="../../assets/images/accountIcon.png" alt="account icon" />
        </footer>
    </div>
  )
}

export default Home