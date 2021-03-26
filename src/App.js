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
        <div style={{display: 'flex', flexDirection: "column", alignContent: "center", justifyContent: 'center'}}>
          <button style={{color: "red", backgroundColor: "#e6e8e8", border: '5px solid red', marginTop: "20%", marginLeft: "auto", marginRight: "auto", width: "120px", height: "80px", fontSize: "40px", borderRadius: "20px"}} onClick={handleClick}>Play</button>
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


  return (
    <div>
      {renderAnimation()}
      {renderPlayButton()}
    </div>
);
}

export default App;
