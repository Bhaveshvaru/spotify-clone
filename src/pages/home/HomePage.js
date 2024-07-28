import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import './home.css'

const HomePage = () => {
  return (
    <div className='home-flex'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default HomePage
