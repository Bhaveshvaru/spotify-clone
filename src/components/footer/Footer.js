import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='links'>
        <ul className='links_ui'>
          <li>Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>
        <ul className='links_ui'>
          <li>Communities</li>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
        <ul className='links_ui'>
          <li>Useful Links</li>
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>
        <ul className='links_ui'>
          <li>Spotify Plans</li>
          <li>Premium Individual</li>
          <li>Premium Duo</li>
          <li>Premium Family</li>
          <li>Premium student</li>
        </ul>
      </div>
      <div className='icons'>
        <div className='ico'>
          <FaInstagram size={25} color='white' />
        </div>
        <div className='ico'>
          <BsTwitterX size={25} color='white' />
        </div>
        <div className='ico'>
          <FaFacebook size={25} color='white' />
        </div>
      </div>
    </div>
  )
}

export default Footer
