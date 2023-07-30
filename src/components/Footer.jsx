import React from 'react'
import '../styles/Footer.css'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'


function Footer() {
    return (
        <div className='footer-container'>
            <section className="section1">
                <div className="col-div">
                    <p className='title'>Ready to get started?</p>
                    <span><button id='download-btn'>Download<HiArrowNarrowRight /></button></span>
                </div>
                <div className="col-div">
                    <p className='title'>Services</p>
                    <span>Email Marketing</span>
                    <span>Campaigns</span>
                    <span>Branding</span>
                    <span>Offline</span>
                </div>
                <div className="col-div">
                    <p className='title'>About</p>
                    <span>Our Story</span>
                    <span>Benefits</span>
                    <span>Team</span>
                    <span>Careers</span>

                </div>
                <div className="col-div">
                    <p className='title'>Help</p>
                    <span>FAQs</span>
                    <span>Contact Us</span>
                </div>
            </section>
            <section className="section2">
                <div>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div id='icons'>
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <AiOutlineInstagram />
                </div>
            </section>
        </div>
    )
}

export default Footer
