import React from 'react'

const OrderHistory = () => {
  return (
    <div className='body'>
        <main className='mainHistory'>
            <section>
                <h1>All orders</h1>
                <div className='mainHistory__list'>
                    <article>
                        <img src="../../assets/images/logoRest.png" alt="Restaurant logo" />
                        <div className='mainHistory__cardInfo'>
                            <h3>Pardes restaurant</h3>
                            <p>$ 132.00</p>
                        </div>
                        <p>Delivered</p>
                    </article>
                    <article>
                        <img src="../../assets/images/logoRest.png" alt="Restaurant logo" />
                        <div className='mainHistory__cardInfo'>
                            <h3>Pardes restaurant</h3>
                            <p>$ 240.00</p>
                        </div>
                        <p>Cancelled</p>
                    </article>
                </div>
            </section>
        </main>
        <footer>
            <img src="../../assets/images/homeIcon.png.png" alt="home icon" />
            <img src="../../assets/images/searchIcon.png" alt="search icon" />
            <img src="../../assets/images/historyIconSelected.png" alt="history icon" />
            <img src="../../assets/images/accountIcon.png" alt="account icon" />
        </footer>
    </div>
  )
}

export default OrderHistory