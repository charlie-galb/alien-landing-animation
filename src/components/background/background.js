import React, {useState, useEffect} from 'react'

import { Stars } from '../stars/stars'

export const Background = () => {

    const [shadRadY, setShadRadY] = useState(70)
    const [shadRadX, setShadRadX] = useState(300)
    const [intervalCounter, setIntervalCounter] = useState(500)
    const [hasStarted, setHasStarted] = useState(true)

    useEffect(() => {
        let changeShadInterval
        if (hasStarted) {
            changeShadInterval = setInterval(() => {
            setShadRadY(shadRadY => shadRadY - 0.1)
            setShadRadX(shadRadX => shadRadX - 0.3)
            setIntervalCounter(intervalCounter => intervalCounter - 1)
            console.log(intervalCounter)
            if (intervalCounter < 1) {
                setIntervalCounter(0);
                setHasStarted(false);
                }
            }, 15)
        } else {
            clearInterval(changeShadInterval)
        }
        return () => clearInterval(changeShadInterval)
    }, [hasStarted, shadRadY, shadRadX, intervalCounter])

    return (
        <g>
            <rect id="sky" width="900px" height="350px" fill="rgb(10 10 44"/>
            <Stars />
            <ellipse id="ground" cx="60%" cy="100%" rx="900" ry="130" fill="rgb(93, 148, 81)" />
            <ellipse id="shadow" cx="50%" cy="88%" rx={shadRadX} ry={shadRadY} fill="black" opacity="0.8"/>
        </g>
    )
}
