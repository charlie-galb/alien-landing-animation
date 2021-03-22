import React , {useEffect, useState} from 'react'

export const Circle = (props) => {
    const [baseX, setBaseX] = useState(props.positionX)
    const [intervalCounter, setIntervalCounter] = useState(0)
    const [hasStarted, setHasStarted] = useState(true)

    useEffect(() => {
        let moveXInterval
        if (hasStarted) {
            moveXInterval = setInterval(() => {
                setBaseX(baseX => baseX + 1)
                setIntervalCounter(intervalCounter => intervalCounter + 1)
                console.log(baseX)
                console.log(intervalCounter)
                if (intervalCounter > 100) {
                    setIntervalCounter(0);
                    setHasStarted(false);
                  }
            }, 100)
        } else {
            clearInterval(moveXInterval)
        }
        return () => clearInterval(moveXInterval)
    }, [hasStarted, baseX, intervalCounter])
    
    return (
        <circle cx={baseX} cy="50" r="50" fill="green" />
    )
}
