import React from 'react'

export const Background = () => {
    return (
        <div style={{position: "absolute", zIndex: -1}}>
            <svg style={{border: '5px solid yellow', width: '800px', height: '450px'}}>
                <rect width="900px" height="500px" fill="rgb(10 10 44"/>
            </svg>
        </div>
    )
}
