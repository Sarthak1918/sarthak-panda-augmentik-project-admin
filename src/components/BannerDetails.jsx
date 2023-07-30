import React from 'react'
import '../styles/BannerDetails.css'
function BannerDetails() {
    return (
        <div className='details-container'>
            <div className='details'>
                <div>
                    <p>300+</p>
                    <span>User</span>
                </div>
                <div>
                    <p>150+</p>
                    <span>Market</span>
                </div>
                <div>
                    <p>30+</p>
                    <span>Builder</span>
                </div>
            </div>
        </div>
    )
}

export default BannerDetails
