import React from 'react'
import './sidebar.css'
import { AiOutlineSpotify } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { FiHome } from 'react-icons/fi'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='side'>
      <div className='side-section-1'>
        <div className='icon-name'>
          <AiOutlineSpotify color='white' className='icon' />
          <h3>Spotify</h3>
        </div>
        <div className='icon-name'>
          <FiHome color='white' className='icon' />
          <h3>Home</h3>
        </div>
        <div className='icon-name'>
          <CiSearch color='white' className='icon' />
          <h3>Search</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
