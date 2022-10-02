import React from 'react'
import './Footer.css'

import {ReactComponent as Facebook} from '../UI/icons/facebook.svg'
import {ReactComponent as Instagram} from '../UI/icons/instagram.svg'
import {ReactComponent as Twitter} from '../UI/icons/twitter.svg'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-header'>
            <div className='footer-heading'>
                <h3>AccioJob</h3>
            </div>
            <div className='social-icons'>
                <span className='icons'>
                    
                    <Facebook />
                </span>
                <span className='icons'>
                    <Instagram />

                </span>
                <span className='icons'>

                    <Twitter />
                </span>
            </div>
        </div>
        <div className='footer-mid'>
            <div className='footer-content'>
                <h5>Company Information</h5>
                <ul className='footer-list'>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='footer-content'>
                <h5>Legal</h5>
                <ul className='footer-list'>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='footer-content'>
                <h5>Features</h5>
                <ul className='footer-list'>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='footer-content'>
                <h5>Resources</h5>
                <ul className='footer-list'>
                    <li>About Us</li>
                    <li>Carrer</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='footer-content'>
                <h5>Get in touch</h5>
                {/* <label for="lname">Last name: </label>
                <input type="text" id="lname" name="lname"></input>
                <input type="submit" value="Submit">Submit</input> */}
            </div>
        </div>
        <div className='footer-bottom'>
                <h6>Made with ❤ at acciojob </h6>
        </div>
    </div>
  )
}

export default Footer