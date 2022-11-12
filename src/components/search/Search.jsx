import React from 'react'

const Search = () => {
  return (
    <div className='body'>
        <main className='mainSearch'>
            <form className='mainSearch__form'>
                <input type="text" placeholder='Search for a dish'/>
            </form>
            <section className='mainSearch__listSection'>
                <h3>Recent searches</h3>
                <div className='mainSearch__listContainer'>
                    <p>Pizza</p>
                    <p>Burger</p>
                    <p>Sushi</p>
                </div>
            </section>
        </main>
        <footer>
            <img src="../../assets/images/homeIcon.png.png" alt="home icon" />
            <img src="../../assets/images/searchIconSelected.png" alt="search icon" />
            <img src="../../assets/images/historyIcon.png" alt="history icon" />
            <img src="../../assets/images/accountIcon.png" alt="account icon" />
        </footer>
    </div>
  )
}

export default Search