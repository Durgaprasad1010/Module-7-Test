import React from 'react';
import './Header.css';
// import './Header2.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {ReactComponent as User} from '../UI/icons/User-logo.svg'
import {ReactComponent as Search} from '../UI/icons/search-logo.svg'
import {ReactComponent as Cart} from '../UI/icons/cart-logo.svg'
import {ReactComponent as Fav} from '../UI/icons/fav-logo.svg'

function  Header() {
  return (
    // Navigation bar
    <div className='nav-bar'>
            <div className='nav-container'>
                <div className='nav-brand'>
                    <h3>AccioJob</h3>
                </div>
                <div className='nav-list'>

                    <Router>
                        <div className='nav-list-section-1'>
                            <Link to="/">Home</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/about">About</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/pages">Pages</Link>
                        </div>
                    </Router>
                    <div className='nav-list-section-2'>
                        {/* logo */}
                        <span className='header-icons'>
                            
                        </span>
                        <span className='header-icons'>
                            <Search />
                        </span>
                        <span className='header-icons'>
                            <Cart/>


                        </span>
                        <span className='header-icons'>
                            <Fav/>

                        </span>
                        
                        <button className='header-icons'><User />Login/Register</button>

                        
                        
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default  Header;