import React , {useState} from 'react'

import { Canvas } from './components/canvas/canvas';

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
      <button style={{marginTop: "35%", marginLeft: "Auto", marginRight: "auto", width: "100px", height: "60px", fontSize: "20px"}} onClick={handleClick}>Play</button>
      )
    }
  }

  const renderAnimation = () => {
    if (isPlaying) {
      return (
        <div>
          <Canvas></Canvas>
        </div>
      )
    }
  }


  return (
    <div style={{display: 'flex', flexDirection: "column", alignContent: "center", justifyContent: 'center'}}>
      {renderAnimation()}
      {renderPlayButton()}
    </div>
  );
}

export default App;
