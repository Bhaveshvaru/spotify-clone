import React from 'react'
import './main.css'
import Artist from '../artist/Artist'
import Album from '../album/Album'

const Main = () => {
  return (
    <div className='main'>
      <div className='login-section' style={{position:'sticky'}}>
        <button>sign up </button>
        <button>log in</button>
      </div>
      <Artist />
      <Album />
    </div>
  )
}

export default Main
