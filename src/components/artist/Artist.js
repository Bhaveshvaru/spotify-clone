import React from 'react'
import './artist.css'
import { FaCirclePlay } from 'react-icons/fa6'

const Artist = () => {
  let artistData = [
    {
      name: 'Weekend',
      imgUrl:
        'https://e1.hespress.com/wp-content/uploads/2022/01/E_wooELVkAM6Sun-800x600.jpeg',
      id: 1,
    },
    {
      name: 'Arijit singh',
      imgUrl:
        'https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg',
      id: 2,
    },
    {
      name: 'Ayushmann ',
      imgUrl:
        'https://img.indiaforums.com/person/480x360/0/9946-ayushmann-khurrana.jpg?c=5nF5B1',
      id: 3,
    },
    {
      name: 'Taylor swift',
      imgUrl:
        'https://media.npr.org/assets/img/2023/09/22/gettyimages-1250380030_slide-c5359c339e44806ecb36bdd266bef78b7bfc471b.jpg?s=1100&c=50&f=jpeg',
      id: 4,
    },
    {
      name: 'A.R Rahman',
      imgUrl:
        'https://cdn.siasat.com/wp-content/uploads/2023/06/BeFunky-collage-23.jpg',
      id: 5,
    },
  ]
  return (
    <div className='container'>
      <div className='name'>
        <h2>Popular artists</h2>
        <h4>Show all</h4>
      </div>
      <div className='cardContainer'>
        {artistData &&
          artistData.map((item) => (
            <>
              <div className='card'>
                <img src={item.imgUrl} alt='artist' />
                <p>{item.name}</p>
                <p>artist</p>
                <FaCirclePlay color='green'  className='hoverBtn'/>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}

export default Artist
