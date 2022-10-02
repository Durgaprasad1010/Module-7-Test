import React from 'react'
import Banner from '../UI/Home/Banner';
import Products from '../UI/Home/Products';
import './Home.css'

function Home() {
  return (
    <div className='home-layout'>
        <Banner />
        <Products />
    </div>
  )
}

export default Home