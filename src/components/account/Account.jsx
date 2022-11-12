import React from 'react'

const Account = () => {
  return (
    <div className='body'>
        <main className='mainAccount'>
            <div className='mainAccount__info'>
                <img src="../../assets/images/Profileimg.png" alt="Profile image" />
                <p>Jenny Wilson</p>
            </div>
            <section className='mainAccount__options'>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>Account edit</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>Account edit</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>Payment</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>Language</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>Location</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>FAQ</p>
                    </div>
                    <img src="#" alt="" />
                </article>
                <article>
                    <div className='mainAccount__optionName'>
                        <img src="#" alt="" />
                        <p>Support</p>
                    </div>
                    <img src="#" alt="" />
                </article>
            </section>
        </main>
        <footer>
            <img src="../../assets/images/homeIcon.png.png" alt="home icon" />
            <img src="../../assets/images/searchIcon.png" alt="search icon" />
            <img src="../../assets/images/historyIcon.png" alt="history icon" />
            <img src="../../assets/images/accountIconSelected.png" alt="account icon" />
        </footer>
    </div>
  )
}

export default Account