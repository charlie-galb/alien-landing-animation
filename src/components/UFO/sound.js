import {useEffect} from 'react'
import useSound from 'use-sound';

import landingNoise from '../../SFX/martian-spaceship-landing.mp3'

export const Sound = () => {
    const playback = 0.6
    const [play] = useSound(landingNoise, { playbackRate: playback, interrupt:true })

    useEffect(() => {
        play();
      }, [play]);
      return null;

}
