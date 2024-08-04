import React from 'react'
import './main.css'
import { artist, album, radio, charts, playlist } from '../../mockData/mock'

import SongSection from '../songSection/SongSection'
import Footer from '../footer/Footer'

const Main = () => {
  return (
    <div className='main'>
      <div className='login-section' style={{ position: 'sticky', top: 0 }}>
        <button>sign up </button>
        <button>log in</button>
      </div>
      <SongSection data={artist} bgStyle={'50%'} title={'Popular Artists'} />
      <SongSection data={album} bgStyle={'20px'} title={'Popular Albums'} />
      <SongSection data={radio} bgStyle={'20px'} title={'Popular Audio'} />
      <SongSection data={charts} bgStyle={'18px'} title={'Featured Charts'} />
      <SongSection
        data={playlist}
        bgStyle={'18px'}
        title={'Spotify Playlists'}
      />
      <Footer />
    </div>
  )
}

export default Main
