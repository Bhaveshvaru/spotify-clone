import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import './home.css'
import Music from '../../components/music/Music.jsx'

const HomePage = () => {
  return (
    <div className='home-flex'>
      <Sidebar />
      <Main />
      <Music />
    </div>
  )
}

export default HomePage
