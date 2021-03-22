import React from 'react'
import { Circle } from './circle'

export const Canvas = () => {
    const baseX = 50
    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '100px'}}>
            <svg style={{border: '5px solid red', width: '800px', height: '450px'}}>
                <Circle positionX={baseX}/>
            </svg>
        </div>
    )
}
