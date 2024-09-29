import React, { useState, useRef, useEffect } from 'react'
import './music.css'
import { CiShuffle } from 'react-icons/ci'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { FaCirclePause } from 'react-icons/fa6'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { MdOutlineReplayCircleFilled } from 'react-icons/md'
import { LuMic2 } from 'react-icons/lu'
import { CiSpeaker } from 'react-icons/ci'
import { PiQueue } from 'react-icons/pi'
import { MdOutlineOpenInFull } from 'react-icons/md'
import { HiMiniSpeakerXMark } from 'react-icons/hi2'
import { RxSpeakerQuiet } from 'react-icons/rx'
import { RxSpeakerLoud } from 'react-icons/rx'
import { HiSpeakerWave } from 'react-icons/hi2'

const Music = () => {
  const sliderRef = useRef(null)
  const audioRef = useRef(null)
  const volumeRef = useRef(null)

  const [pause, setPause] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const [systemVolume, setSystemVolume] = useState(70)

  const handleSliderChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration
    audioRef.current.currentTime = newTime
  }

  const pauseHandler = () => {
    audioRef.current.pause()
    setPause(false)
  }

  const playHandler = () => {
    audioRef.current.play()
    setPause(true)
  }

  useEffect(() => {
    setCurrentTime(0)
    const updateSlider = () => {
      const audio = audioRef.current
      if (audio) {
        setCurrentTime((audio.currentTime / audio.duration) * 100)
      }
    }

    const interval = setInterval(updateSlider, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.style.setProperty('--slider-value', `${currentTime}%`)
    }
  }, [currentTime])

  const handleVolumeChange = (e) => {
    setSystemVolume(e.target.value / 100)
    audioRef.current.volume = e.target.value / 100
  }

  useEffect(() => {
    const slider = volumeRef.current
    if (slider) {
      slider.style.setProperty('--slider-value', `${systemVolume * 100}%`)
    }
  }, [systemVolume])

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
          <p>Ram Sampath, Arijit Singh</p>
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
          <div>
            <input
              id='playback-slider'
              type='range'
              min='0'
              max='100'
              value={currentTime}
              onChange={handleSliderChange}
              style={{ width: '200%' }}
              className='player-input'
              ref={sliderRef}
            />
            <audio
              src='https://www.pagalworld.com.sb/files/download/type/64/id/71229/1.mp3?1'
              ref={audioRef}
            ></audio>
          </div>
        </div>
      </div>
      <div className='music-section-3'>
        <LuMic2 color='white' size={30} className='vol-icons' />
        <CiSpeaker color='white' size={30} className='vol-icons' />
        <PiQueue color='white' size={30} className='vol-icons' />
        <RxSpeakerLoud color='white' size={30} className='vol-icons' />

        <input
          id='volume-slider'
          type='range'
          min='0'
          max='100'
          value={systemVolume * 100}
          onChange={handleVolumeChange}
          style={{ width: '80%' }}
          className='volume-input'
          ref={volumeRef}
        />
        <MdOutlineOpenInFull color='white' size={30} className='vol-icons' />
      </div>
    </div>
  )
}

export default Music
