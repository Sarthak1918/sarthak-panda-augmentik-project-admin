import React from 'react'
import '../styles/Article.css'
import BannerDetails from './BannerDetails'
import furniture2 from '../assets/furniture2.png'
import furniture3 from '../assets/furniture3.png'

function Article() {
    return (
        <>
            <div className='article-container'>
                <div className='article-left'>
                    <p>Quality is what we pursue,<br />We know what we do.</p>
                </div>
                <div className='article-right'>
                    <div>
                        <p>Our property website is your ultimate destination for all things real
                            estate. Whether you're buying, selling, renting, or investing, we've got
                            you covered. With a user-friendly interface and a wealth of reliable
                            information at your fingertips, our platform is designed to make your
                            property journey smooth and successful.</p>
                    </div>
                    <div  style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <BannerDetails />
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <div className='img-container' style={{aspectRatio:"193 / 91"}}><img src={furniture2} alt="furniture" /></div>
                <div className='img-container' style={{aspectRatio:"193 / 93"}}><img src={furniture3} alt="furniture" /></div>
            </div>
        </>

    )
}

export default Article
