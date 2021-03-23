import React from 'react'
import styles from "./background.module.css"

export const Background = () => {
    return (
        <div style={{position: "absolute", zIndex: -1}}>
            <svg style={{width: '800px', height: '450px'}}>
                <rect id="sky" width="900px" height="350px" fill="rgb(10 10 44"/>
                <rect id="ground" x="0px" y="350px" width="900px" height="150px" fill="rgb(87 59 12)"/>
                <circle className={styles.star1} cx="1%" cy="3%" r="1" fill="red" />
                <circle className={styles.star2} cx="10%" cy="4%" r="1" fill="yellow" />
                <circle className={styles.star3} cx="89%" cy="23%" r="1" fill="green" />
                <circle className={styles.star4} cx="80%" cy="11%" r="1" fill="pink" />
                <circle className={styles.star5} cx="40%" cy="56%" r="1" fill="yellow" />
                <circle className={styles.star1} cx="37%" cy="25%" r="1" fill="white" />
                <circle className={styles.star2} cx="32%" cy="62%" r="1" fill="pink" />
                <circle className={styles.star3} cx="43%" cy="35%" r="1" fill="red" />
                <circle className={styles.star4} cx="7%" cy="46%" r="1" fill="yellow" />
                <circle className={styles.star5} cx="9%" cy="67%" r="1" fill="green" />
                <circle className={styles.star1} cx="23%" cy="11%" r="1" fill="pink" />
                <circle className={styles.star2} cx="70%" cy="29%" r="1" fill="yellow" />
                <circle className={styles.star3} cx="19%" cy="55%" r="1" fill="white" />
                <circle className={styles.star4} cx="22%" cy="62%" r="1" fill="pink" />
                <circle className={styles.star5} cx="83%" cy="65%" r="1" fill="red" />
                <circle className={styles.star1} cx="77%" cy="46%" r="1" fill="yellow" />
                <circle className={styles.star2} cx="67%" cy="67%" r="1" fill="green" />
                <circle className={styles.star3} cx="53%" cy="21%" r="1" fill="pink" />
                <circle className={styles.star4} cx="69%" cy="40%" r="1" fill="yellow" />
                <circle className={styles.star5} cx="15%" cy="35%" r="1" fill="white" />
                <circle className={styles.star1} cx="22%" cy="20%" r="1" fill="pink" />
                <circle className={styles.star2} cx="30%" cy="4%" r="1" fill="green" />
                <circle className={styles.star3} cx="37%" cy="7%" r="1" fill="pink" />
                <circle className={styles.star4} cx="43%" cy="2%" r="1" fill="yellow" />
                <circle className={styles.star5} cx="65%" cy="9%" r="1" fill="white" />
                <circle className={styles.star1} cx="87%" cy="6%" r="1" fill="pink" />
                <circle className={styles.star2} cx="90%" cy="43%" r="1" fill="yellow" />
                <circle className={styles.star3} cx="93%" cy="62%" r="1" fill="green" />
                <circle className={styles.star4} cx="84%" cy="26%" r="1" fill="pink" />
                <circle className={styles.star5} cx="50%" cy="50%" r="1" fill="yellow" />
                <circle className={styles.star1} cx="42%" cy="58%" r="1" fill="white" />
                <circle className={styles.star2} cx="37%" cy="64%" r="1" fill="pink" />
                <circle className={styles.star3} cx="8%" cy="12%" r="1" fill="green" />
                <circle className={styles.star4} cx="14%" cy="23%" r="1" fill="pink" />
                <circle className={styles.star5} cx="30%" cy="43%" r="1" fill="yellow" />
                <circle className={styles.star1} cx="37%" cy="50%" r="1" fill="white" />
                <circle className={styles.star2} cx="3%" cy="42%" r="1" fill="pink" />
                <circle className={styles.star3} cx="60%" cy="40%" r="1" fill="pink" />
                <circle className={styles.star4} cx="64%" cy="39%" r="1" fill="yellow" />
                <circle className={styles.star5} cx="59%" cy="55%" r="1" fill="white" />
                <circle className={styles.star1} cx="48%" cy="22%" r="1" fill="pink" />
                <circle className={styles.star2} cx="73%" cy="35%" r="1" fill="red" />
            </svg>
        </div>
    )
}
