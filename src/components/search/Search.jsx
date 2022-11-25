import React, { useEffect, useState } from 'react'
import './search.scss'
import homeIcon from '../../assets/images/homeIcon.png'
import searchIconSelected from '../../assets/images/searchIconSelected.png'
import historyIcon from '../../assets/images/historyIcon.png'
import accountIcon from '../../assets/images/accountIcon.png'
import searchHistoryIcon from '../../assets/images/SearchHistoryIcon.png'
import searchFormIcon from '../../assets/images/searchFormIcon.png'
import cardImage from '../../assets/images/cardImage.png'
import { useNavigate } from 'react-router'
import { actionFillPlatosAsync } from '../../redux/actions/platosAction'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [showProduct, setShowProduct] = useState(false);
    const [product, setProduct] = useState('');
    const [params, setParams] = useSearchParams();
    const [load, setLoad] = useState(false)
    const [dataFiltered, setDataFiltered] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { platos } = useSelector((store) => store.platosStore);
    const handleFooterButtons = (direction) => {
        navigate(`/${direction}`)
    }

    useEffect(() => {
        dispatch(actionFillPlatosAsync())
        isPlatosInfo()
    }, [dispatch])

    const handleSearch = (e) => {
        e.preventDefault()
        if (product !== '') {
          setParams({
            plato: product
          })
          platosFilter(product)
          setShowProduct(true)
        } else {
          setParams({})
          setShowProduct(false)
        }
    
      }

    const handleChange = (target) => {
        setProduct(target.target.value)
        setDataFiltered([])
      }    

    const platosFilter = (plato) => {
        for (let i = 0; i <platos.length; i++) {
            let tempFilter = dataFiltered;
            if (platos[i].name.toUpperCase().includes(plato.toUpperCase()) === true) {
                tempFilter.push(platos[i])
                setDataFiltered(tempFilter)
            } 
        }
    }

    const isPlatosInfo = () => {
        if (platos) {
            setLoad(true)
        }
    }
  return (
    <div className='body'>
        <main className='mainSearch'>
            <form className='mainSearch__form'>
                <input onChange={(target)=>{handleChange(target)}} type="text" placeholder='Search for a dish'/>
                <button onClick={(e)=>handleSearch(e)}><img src={searchFormIcon} width='20px' alt="Search icon" /></button>
            </form>
            {
                !showProduct ?
                (
                    <section className='mainSearch__listSection'>
                        <h3>Recent searches</h3>
                        <div className='mainSearch__listContainer'>
                            <p><img src={searchHistoryIcon} alt="search histoy icon" /> ...</p>
                            <p><img src={searchHistoryIcon} alt="search histoy icon" /> ...</p>
                            <p><img src={searchHistoryIcon} alt="search histoy icon" /> ...</p>
                        </div>
                    </section>
                ):
                (
                    load ? (
                        <section className='mainSearch__cardsContainer'>
                        {
                            dataFiltered.length ?
                            (
                                dataFiltered.map((plato, index) => (
                                    <article key={index} className='mainSearch__card'>
                                        <img src={plato.image} alt="food image" />
                                        <h4>{plato.name}</h4>
                                        <p>$ {plato.price}</p>
                                    </article>
                                ))           
                            ):
                            (
                                <>
                                    <h3>Recent searches</h3>
                                    <div className='mainSearch__listContainer'>
                                        <p><img src={searchHistoryIcon} alt="search histoy icon" /> ...</p>
                                        <p><img src={searchHistoryIcon} alt="search histoy icon" /> ...</p>
                                        <p><img src={searchHistoryIcon} alt="search histoy icon" /> ...</p>
                                    </div>
                                </>
                            )
                        }
                        </section>
                    ) : 
                    (<div>Cargando...</div>)
                )
            }
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