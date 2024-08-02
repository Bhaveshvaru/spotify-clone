import React from 'react'
import './album.css'
import { FaCirclePlay } from 'react-icons/fa6'

const Album = () => {
  let albumData = [
    {
      name: 'Love hotel',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx08vcwSCpVqj6D-2omgbliYoi-V5z1f6VwMtu4y82n8bZnAvg2DjAx-wpeeRzvSTe-Ho&usqp=CAU',
      id: 1,
    },
    {
      name: 'Animal',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg',
      id: 2,
    },
    {
      name: 'Sajni',
      imgUrl: 'https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg',
      id: 3,
    },
    {
      name: 'Rockstar',
      imgUrl:
        'https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b',
      id: 4,
    },
    {
      name: 'Weekend tops',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuFG8iOzgtCVwcpRfH4I3IMr8QL8cCsCtpl0TDEt1jHNzi1STrQhPjpxAZjs-BQlgPTY&usqp=CAU',
      id: 5,
    },
  ]
  return (
    <div className='container'>
      <div className='name'>
        <h2>Popular albums</h2>
        <h4>Show all</h4>
      </div>
      <div className='cardContainer'>
        {albumData &&
          albumData.map((item) => (
            <>
              <div className='card'>
                <img
                  src={item.imgUrl}
                  alt='artist'
                  style={{ borderRadius: '20px' }}
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

export default Album
