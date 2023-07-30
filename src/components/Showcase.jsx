import React from 'react'
import '../styles/Showcase.css'
import furniture4 from '../assets/furniture4.png'
import furniture5 from '../assets/furniture5.png'
import furniture6 from '../assets/furniture6.png'
function Showcase() {
    return (
        <div className='showcase-container'>
            <div className="left">
                <div className='left-content'>
                    <p className='p1'>Building Dreams,<br />Creating Homes</p>
                    <p className='p2'>Our listings feature detailed property descriptions, outlining
                        key features, amenities, and unique selling points to give you a
                        complete picture of each property's potential.</p>
                </div>
                <div className='img-container' style={{aspectRatio:"400 / 297"}}>
                    <img src={furniture4} alt="furniture" />
                </div>
            </div>
            <div className="right">
                <div className='img-container'style={{aspectRatio:"25 / 24"}}>
                    <img src={furniture5} alt="furniture"/>
                </div>
                <div className='img-container' style={{aspectRatio:"200 / 107"}}>
                    <img src={furniture6} alt="furniture"/>
                </div>
            </div>
        </div>
    )
}

export default Showcase
