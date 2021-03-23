import React from 'react'
import { UFO } from '../UFO/UFO'

export const Canvas = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '100px', border: '5px solid red', width: '800px', height: '450px'}}>
            <UFO positionY={50}/>
        </div>
    )
}
