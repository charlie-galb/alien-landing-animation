import React , {useEffect, useState} from 'react'
import styles from './UFO.module.css'

export const UFO = (props) => {
    const [baseY, setBaseY] = useState(-250)
    const [intervalCounter, setIntervalCounter] = useState(0)
    const [hasStarted, setHasStarted] = useState(true)

    useEffect(() => {
        let moveXInterval
        if (hasStarted) {
            moveXInterval = setInterval(() => {
                setBaseY(baseY => baseY + 1)
                setIntervalCounter(intervalCounter => intervalCounter + 1)
                if (intervalCounter > 500) {
                    setIntervalCounter(0);
                    setHasStarted(false);
                  }
            }, 15)
        } else {
            clearInterval(moveXInterval)
        }
        return () => clearInterval(moveXInterval)
    }, [hasStarted, baseY, intervalCounter])
    
    return (
        <div style={{marginTop: baseY}}>
            <svg style={{border: '5px solid blue', width: '310px', height: '150px'}}>
                <circle cx="50%" cy="50%" r="75" fill="green" />
                <ellipse cx="50%" cy="50%" rx="150" ry="30" stroke="green" fill="green" strokeWidth="5"/>
                <path className={styles.halfwayLine} d="M 5 75 Q 140 110 306 75" stroke="black" strokeWidth="5" fill="transparent"/>
            </svg>
        </div>
        
    )
}
