import React from 'react'
import './main.css'
import Artist from '../artist/Artist'

const Main = () => {
  return (
    <div className='main'>
      <div className='login-section'>
        <button>sign up </button>
        <button>log in</button>
      </div>
      <Artist />
    </div>
  )
}

export default Main
