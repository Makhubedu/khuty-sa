import React, { useState, useRef, useEffect } from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import Image from "next/image";
import dynamic from 'next/dynamic'

import styles from '../styles/Music.module.css';

const useStyles = makeStyles(
  (theme) => {
    return {
      root: {
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        },
      },
      loopIcon: {
        color: '#3f51b5',
        '&.selected': {
          color: '#0921a9'
        },
        '&:hover': {
          color: '#7986cb'
        },
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      },
      playIcon: {
        color: '#f50057',
        '&:hover': {
          color: '#ff4081'
        }
      },
      volumeIcon: {
        color: 'rgba(0, 0, 0, 0.54)'
      },
      volumeSlider: {
        color: 'black'
      },
      progressTime: {
        color: 'rgba(0, 0, 0, 0.54)'
      },
      mainSlider: {
        color: '#3f51b5',
        '& .MuiSlider-rail': {
          color: '#7986cb'
        },
        '& .MuiSlider-track': {
          color: '#3f51b5'
        },
        '& .MuiSlider-thumb': {
          color: '#303f9f'
        }
      }
    }
  });

const AudioPlayer = dynamic(
  () => import('material-ui-audio-player'), 
  {ssr: false}
)

const TextSlider = dynamic(
  () => import('react-typing-effect'),
  {ssr: false}
)

const MusicPlayer = ({ image, song, track}) => {

  const songName = [song]
  const src = [
    track
  ];
    
    return (
      <div className={styles.player_container}>
        <div className={styles.music_img}>
          <Image 
            src={image}
            alt={song}
            width={400}
            height={400}
            quantity={50}
            placeholder="blur"
            blurDataURL={image}
            loading="lazy"
          />
        </div>
        <ThemeProvider >
          <AudioPlayer 
            src={src} 
            width="400px"
            variation="primary"
            spacing={3}
            download={true}
            order="standart"
            preload={true}
            loop={true}
            volume={true}
            useStyles={useStyles}
          />
          <TextSlider
            text={songName}
            className={styles.song_name}
            typingDelay={500}
            eraseDelay={500}
            cursor=" "
          />
        </ThemeProvider>
      </div>
    )
  }
  
export default MusicPlayer;