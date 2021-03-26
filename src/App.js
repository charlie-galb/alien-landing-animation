import React , {useState} from 'react'

import { Canvas } from './components/canvas/canvas';
import {Sound} from './components/sound/sound'
import styles from './App.module.css'

function App() {
  const [isNotYetPlayed, setIsNotYetPlayed] = useState(true)
  const [isPlaying, setisPlaying] = useState(false)

  const handleClick = () => {
    setIsNotYetPlayed(false)
    setisPlaying(true)
  }

  const renderPlayButton = () => {
    if (isNotYetPlayed) {
      return (
        <div className={styles.playButtonContainer} >
          <button className={styles.playButton} onClick={handleClick}>Play</button>
        </div>
      )
    }
  }

  const renderAnimation = () => {
    if (isPlaying) {
      return (
          <Canvas></Canvas>
      )
    }
  }

  const renderSound = () => {
    return (
      <Sound></Sound>
    )
  }


  return (
    <div>
      {renderAnimation()}
      {renderPlayButton()}
      {renderSound()}
    </div>
);
}

export default App;
