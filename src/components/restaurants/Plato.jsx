import React from 'react'
import { useNavigate } from 'react-router'

const Plato = () => {
    navgate = useNavigate()

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
    <>
      <div className="body">
        <div className="main">
          <section className="main__header" style={{ backgroundImage: `url('https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png')` }}>
            <div className="main__goBack" onClick={handleGoBack}>
              <span><img src="https://qualityhomescostacalida.com/assets/layout/chevron-left.png" width="35px" /></span>Todas las pizzas
            </div>
          </section>
          <div className="main__contentContainer">
            <section className="main__info container">
              <h1>{pizza.name}</h1>
              <div className="main__chips">
                <button className="main__chips1">$10000 </button>
              </div>
              <h3>Descripción</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum nemo magnam. Quae incidunt, quasi accusamus dolorem error pariatur eligendi?
              </p>
            </section>
            <h3>Ingredientes</h3>
            <section className="main__ingredients container">
                <article className="main__ingredient">
                  <p>1. Tomate</p>
                </article>
                <article className="main__ingredient">
                  <p>2. Pepino</p>
                </article>
                <article className="main__ingredient">
                  <p>3. Queso</p>
                </article>
                <article className="main__ingredient">
                  <p>4. Peperoni</p>
                </article>
            </section>
          </div>
        </div>
        <div className="buySection">
          <div className="buySection__container container">
            <div className="buySection__counter">
              <button onClick={handleLess}>-</button>
              <span>{count}</span>
              <button onClick={handlePlus}>+</button>
            </div>
            <button className="buySection__cartButton">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie2UMVLDMBBF9zOcIQVpoYMiNTAcD07DFQIToMBQQgMtLkKZ9I8CMSMrayIc2QNMfqPxSvufdi3JbKvfKGAEPLCqChiVAIyBS2DhQHK1CB7jXKiAx28MG9WFLlRr1isHPAkJNbC3Ydfq4DVJ53ecnKMwTiXVXcGS3szsOnwe5oD3w/jaFRrpJYwHBbz+i4DbzhcnX7MvniIwQxQoSWb+4RpEMfhmAN7MjQJXPf7facxKW/3UstNjMzvtGHO9d5PJZy9D0p2ZWXz+cmNt3mnFLriQGhXntrqE2iuWNDez9x6gc0kNX+8e99HuFc/0cJl9tvssDgAnFr1yP4lFnmvBXsXexc+NuZ5eq6uW5E10n7UKuACWBV6rJXDeQyFb/QF9ALYLHHR5OwtgAAAAAElFTkSuQmCC"
                alt="cart icon"
              />
            </button>
            <button className="buySection__buyButton" onClick={pago}>Pagar</button>
          </div>
        </div>
      </div>
  </>
  )
}

export default Plato