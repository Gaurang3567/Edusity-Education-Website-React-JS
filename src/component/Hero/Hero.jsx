import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt corrupti vitae architecto assumenda voluptatem dignissimos vel nobis atque temporibus reiciendis quis non, unde tempora fuga, maiores, nesciunt repudiandae? Aliquid!</p>
        <buttom className="btn">Explore more <img src={dark_arrow} alt=""  className='darkarrow'/></buttom>
      </div>
    </div>
  )
}

export default Hero
