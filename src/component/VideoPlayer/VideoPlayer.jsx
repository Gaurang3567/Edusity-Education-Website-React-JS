import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({ playState, setPlayState }) => {

    const player = useRef(null);
    const Player = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }
    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={Player}>
            <video src="" autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
