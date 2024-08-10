import React, { useState, useRef, useEffect } from 'react'
import './music.css'
import { CiShuffle } from 'react-icons/ci'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { FaCirclePause } from 'react-icons/fa6'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { MdOutlineReplayCircleFilled } from 'react-icons/md'

const Music = () => {
  const sliderRef = useRef(null)
  const audioRef = useRef(null)

  const [pause, setPause] = useState(false)
  const [volume, setVolume] = useState(60)
  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }
  const pauseHandler = () => {
    audioRef.current.pause()
    console.log(audioRef)
    //currentTime
    // duration
    setPause(false)
  }
  const playHandler = () => {
    audioRef.current.play()
    setPause(true)
  }
  useEffect(() => {
    const slider = sliderRef.current

    function updateSlider() {
      const value = slider.value
      const max = slider.max
      // Update the CSS variable to adjust the gradient
      slider.style.setProperty('--slider-value', `${(value / max) * 100}%`)
    }

    slider.addEventListener('input', updateSlider)
    updateSlider() // Initialize on load

    // Clean up the event listener on component unmount
    return () => {
      slider.removeEventListener('input', updateSlider)
    }
  }, [])
  return (
    <div className='music-container'>
      <div className='music-section-1'>
        <img
          src='https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg'
          alt='album'
          className='song-img'
        />
        <div className='music-title'>
          <p>Sajni from Laapta Ladies</p>
          <p>Ram sampath, Arijit singh</p>
        </div>
      </div>
      <div className='music-section-2'>
        <div className='play-icons'>
          <CiShuffle color='white' size={30} className='music-icons' />
          <FaAngleDoubleLeft color='white' size={30} className='music-icons' />
          {!pause ? (
            <FaPlayCircle
              onClick={playHandler}
              color='white'
              size={30}
              className='music-icons'
            />
          ) : (
            <FaCirclePause
              onClick={pauseHandler}
              color='white'
              size={30}
              className='music-icons'
            />
          )}

          <FaAngleDoubleRight color='white' size={30} className='music-icons' />
          <MdOutlineReplayCircleFilled
            color='white'
            size={30}
            className='music-icons'
          />
        </div>

        <div className='music-range'>
          <input
            id='volume-slider'
            type='range'
            min='0'
            max='100'
            value={volume}
            onChange={handleVolumeChange}
            style={{ width: '200%' }}
            className='player-input'
            ref={sliderRef}
          />
          <audio
            src='https://mp3.chillhop.com/serve.php/?mp3=10075'
            ref={audioRef}
          ></audio>
        </div>
      </div>
      {/* <div className='music-section-3'></div> */}
      <div className='music-section-1'>
        <img
          src='https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg'
          alt='album'
          className='song-img'
        />
        <div className='music-title'>
          <p>Sajni from Laapta Ladies</p>
          <p>Ram sampath, Arijit singh</p>
        </div>
      </div>
    </div>
  )
}

export default Music
