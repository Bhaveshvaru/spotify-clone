import React from 'react'
import './sidebar.css'
import { AiOutlineSpotify } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { FiHome } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { FaPlus } from 'react-icons/fa6'
import { GrLanguage } from 'react-icons/gr'
import './sidebar.css'

const Sidebar = () => {
  let sideFooter = [
    'Legal',
    'Safety & Privacy Center',
    'Privacy Policy',
    'Cookies',
    'About Ads',
  ]
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
      <div className='side-section-2'>
        <div className='library'>
          <VscLibrary color='white' className='icon' />
          <h3>Your Library</h3>
          <FaPlus
            color='white'
            style={{ marginLeft: '1.5rem', cursor: 'pointer' }}
          />
        </div>
        <div className='playlist'>
          <div style={{ marginLeft: '10px' }}>
            <p>Create your Playlist</p>
            <p>It’s easy, we’ll help you</p>
            <button className='btn-playlist'>Create playlist</button>
          </div>
        </div>
        <div className='footer_side'>
          {sideFooter &&
            sideFooter.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <button className='btn-lang'>
          <div>
            <GrLanguage />
          </div>
          English
        </button>
      </div>
    </div>
  )
}

export default Sidebar
