import React , {useEffect, useState} from 'react'
import styles from './UFO.module.css'

export const UFO = (props) => {
    const [baseY, setBaseY] = useState(-250)
    const [intervalCounter, setIntervalCounter] = useState(0)
    const [hasStarted, setHasStarted] = useState(true)

    useEffect(() => {
        let moveYInterval
        if (hasStarted) {
            moveYInterval = setInterval(() => {
                setBaseY(baseY => baseY + 1)
                setIntervalCounter(intervalCounter => intervalCounter + 1)
                if (intervalCounter > 500) {
                    setIntervalCounter(0);
                    setHasStarted(false);
                  }
            }, 15)
        } else {
            clearInterval(moveYInterval)
        }
        return () => clearInterval(moveYInterval)
    }, [hasStarted, baseY, intervalCounter])
    
    return (
        <svg x="30%" y={baseY} width= '310px' height='150px'>
            <defs>
                <clipPath id="cut-off">
                    <rect x="80" y="0" width="200" height="50"/>
                </clipPath>
            </defs>
            <circle cx="50%" cy="50%" r="75" fill="grey" />
            <circle cx="50%" cy="50%" r="75" stroke="grey" fill="pink" clip-path="url(#cut-off)"/>
            <ellipse cx="50%" cy="50%" rx="150" ry="30" stroke="grey" fill="grey" strokeWidth="5"/>
            <ellipse cx="50%" cy="32%" rx="68" ry="15" fill="pink" strokeWidth="5"/>
            <path className={styles.halfwayLine} d="M 5 75 Q 140 110 306 75" stroke="black" strokeWidth="5" fill="transparent"/>
        </svg>
    )
}
