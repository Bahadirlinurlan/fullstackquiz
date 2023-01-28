import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'





const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
      <div className='navbar__left'>
        <p>Floral Studio</p>
      </div>

      <div className='navbar__right'>
      <p><Link className='link' to= "/">Home</Link></p>
      <p><Link className='link' to= "/Add">Add</Link></p>
       <p>About us</p>
       <p>Portfolio</p>
       <p>Pricing</p>



      </div>
      </div>
      

      
    </div>
  )
}

export default Navbar
