import React from 'react'
import '../styles/Hero.css'
import furniture1 from "../assets/furniture1.png"
import BannerDetails from './BannerDetails';
function Hero() {
  return (
    <div className='hero-container'>
      <section className="first">
        <div className='quote'>
          <p className='p1'>A vision for your life</p>
          <p>A good real estate agent doesn't disappear once once the closing papers are signed</p>
        </div>
        <div className='tagline'>
          <p>Going Above and + beyond to find your next home</p>
        </div>
      </section>

      <section className="second">
        <div className='left'>
          <div className="btn-area">
            <button>Property</button>
            <button>Real Estate</button>
            <button>Furniture</button>
            <button>Minimalist</button>
          </div>
          <div className='img-container' style={{aspectRatio:"103 / 46"}}>
            <img  src={furniture1} alt="" srcset="" />
          </div>
        </div>

        <div className="right">
          <BannerDetails />
          <div className='right-content'>
                <p>No One Has More Experience Or Expertise To Help You Than An Agent Who is A Realtor </p>
            </div>
            <button className='explore-btn'>Explore</button>
        </div>
      </section>
    </div>
  )
}

export default Hero;