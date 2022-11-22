import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './plato.scss'

const Plato = () => {
    const navigate = useNavigate()

    const [count, setCount] = useState(1)

    const handleGoBack = () => {
        navigate(-1)
      }

      const handleLess = () => {
        if (count > 1) {
          let temp = count;
          setCount(temp - 1)
        }
      }
    
      const handlePlus = () => {
        let temp = count;
        setCount(temp + 1)
      }
  return (
    <div className='body'>
      <header className='headerPlato'>
        <div className='headerPlato__GoBack'>
          <img src="https://qualityhomescostacalida.com/assets/layout/chevron-left.png" alt="Arrow left" />
        </div>
      </header>
      <main className='mainPlato'>
        <section className='mainPlato__info'>
          <div>
            <h1>Caesar salad without sauge</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div>
            <h3>Ingredients</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum!</p>
          </div>
        </section>
      </main>
      <div className='buySection'>
        <section className='buySection__container'>
          <div className='buySection__counter'>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className='buySection__addButton'>
            <p>Add</p>
            <span>$14.00</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Plato