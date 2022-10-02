import React from 'react'
import './Banner.css'

import ellipse1 from '../assets/Ellipse1.png';
import ellipse2 from '../assets/Ellipse2.png';
import ellipse3 from '../assets/Ellipse3.png';
import ellipse4 from '../assets/Ellipse4.png';
import ellipse5 from '../assets/Ellipse5.png';
import picture from '../assets/technology.png';

function Banner() {
  return (
    <>
    <div className='main-container'>
        <div className='container'>
            <div className='section-1'>
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects act, but how small objects scale</h4>
                <div className='btn-1'>
                    <button id='btn'><h3>SHOP NOW</h3></button>
                </div>
            </div>
            <div className='section-2'>
                <div id='cover-1'>
                    <div className='img-container'>
                        <img id='ellipse-1' src={ellipse1} />
                        <img id='ellipse-2' src={ellipse2} />
                        <img id='ellipse-3' src={ellipse3} />
                        <img id='ellipse-4' src={ellipse4} />
                        <img id='ellipse-5' src={ellipse5} />
                        <img id='picture' src={picture} />
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Banner