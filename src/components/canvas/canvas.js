import React from 'react'

import { UFO } from '../UFO/UFO'
import { Background } from '../background/background'
import styles from './canvas.module.css'

export const Canvas = () => {

    return (
        <div className={styles.canvasContainer}>
            <svg className={styles.canvas}>
                <Background />
                <UFO />
            </svg>
        </div>
    )
}
