import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='links'></div>
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
