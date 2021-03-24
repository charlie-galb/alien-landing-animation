import React from 'react'
import { UFO } from '../UFO/UFO'
import { Background } from '../background/background'

export const Canvas = () => {

    return (
        <div style={{display: 'flex', alignContent: "center", justifyContent: 'center', paddingTop: '100px'}}>
            <svg style={{width: '800px', height: '450px', border: '5px solid red'}}>
                <Background />
                <UFO />
            </svg>
        </div>
    )
}
