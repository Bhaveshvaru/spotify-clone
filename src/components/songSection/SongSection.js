import React from 'react'
import './song.css'
import { FaCirclePlay } from 'react-icons/fa6'

const SongSection = ({ data, bgStyle, title }) => {
  return (
    <div className='container'>
      <div className='name'>
        <h2>{title}</h2>
        <h4>Show all</h4>
      </div>
      <div className='cardContainer'>
        {data &&
          data.map((item) => (
            <>
              <div className='card'>
                <img
                  src={item.imgUrl}
                  alt='artist'
                  style={{ borderRadius: bgStyle }}
                />
                <p>{item.name}</p>
                <p>album</p>
                <FaCirclePlay color='green' className='hoverBtn' />
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default SongSection
