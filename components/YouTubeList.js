import React from 'react'
import dynamic from 'next/dynamic'
import YouTube from "react-youtube"

import styles from '../styles/YouTube.module.css'


const YouTubeList = () => {
    const opts = {
        height: '300',
        width: '350',
    }

    const videoReady = (event) => {
        event.target.pauseVideo();
    }


    return (
        <div className={styles.youtube_container}>
            <div className="section-heading">My Vidoes</div>
            <div className="players" id="youtube">
                <div className={styles.yt_vidoes}>
                    <YouTube
                        videoId="3hLZdSyE108"
                        opts={opts}
                        onReady={videoReady}
                    />
                </div>
                <div className={styles.yt_vidoes}>
                    <YouTube
                        videoId="DSpHAWdJMx0"
                        opts={opts}
                        onReady={videoReady}
                    />
                </div>
                <div className={styles.yt_vidoes}>
                    <YouTube
                        videoId="3b2L_9sJhAU"
                        opts={opts}
                        onReady={videoReady}
                    />
                </div>
                <div className={styles.yt_vidoes}>
                    <YouTube
                        videoId="VkQLCzWo-js"
                        opts={opts}
                        onReady={videoReady}
                    />
                </div>
                <div className={styles.yt_vidoes}>
                    <YouTube
                        videoId="Meephi7rlvo"
                        opts={opts}
                        onReady={videoReady}
                    />
                </div>
                <div className={styles.yt_vidoes}>
                    <YouTube
                        videoId="aGk7GioNyAI"
                        opts={opts}
                        onReady={videoReady}
                    />
                </div>
            </div>
        </div>
    )
}

export default YouTubeList
