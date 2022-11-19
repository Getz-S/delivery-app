import React from 'react'
import './search.scss'
import homeIcon from '../../assets/images/homeIcon.png'
import searchIconSelected from '../../assets/images/searchIconSelected.png'
import historyIcon from '../../assets/images/historyIcon.png'
import accountIcon from '../../assets/images/accountIcon.png'
import searchHistoryIcon from '../../assets/images/SearchHistoryIcon.png'
import { useNavigate } from 'react-router'

const Search = () => {
    const navigate = useNavigate()
    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }
  return (
    <div className='body'>
        <main className='mainSearch'>
            <form className='mainSearch__form'>
                <input type="text" placeholder='Search for a dish'/>
            </form>
            <section className='mainSearch__listSection'>
                <h3>Recent searches</h3>
                <div className='mainSearch__listContainer'>
                    <p><img src={searchHistoryIcon} alt="search histoy icon" /> Pizza</p>
                    <p><img src={searchHistoryIcon} alt="search histoy icon" /> Burger</p>
                    <p><img src={searchHistoryIcon} alt="search histoy icon" /> Sushi</p>
                </div>
            </section>
        </main>
        <footer className='footerSearch'>
            <img src={homeIcon} alt="home icon" onClick={() => {handleFooterButtons('home')}}/>
            <img src={searchIconSelected} alt="search icon" onClick={() => {handleFooterButtons('search')}}/>
            <img src={historyIcon} alt="history icon" onClick={() => {handleFooterButtons('orderhistory')}}/>
            <img src={accountIcon} alt="account icon" onClick={() => {handleFooterButtons('account')}}/>
        </footer>
    </div>
  )
}

export default Search