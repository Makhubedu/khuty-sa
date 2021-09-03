import React, { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import styles from '../styles/Music.module.css'

import dynamic from 'next/dynamic';
import Image from 'next/image'

const Slider = dynamic(
  () => import('react-slick'),
  {ssr: false}
)

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  if (props.type === "prev"){
    className += " slick-prev-arrow"
  }
  const char = props.type === "next" ? 
    <Image 
      className={className} 
      src="/images/arrow-right.svg" 
      alt="Left Arrow"  
      width={40} height={40}  
    /> :
    <Image 
      className={className} 
      src="/images/arrow-right.svg" 
      alt="Left Arrow"  
      width={40} height={40}  
    />;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}



const Music = ({songs}) => {

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />
  }

  return (
    <div className={styles.music_container} id="music">
      <div className="section-heading">Music</div>
      <div className="players">
          <MusicPlayer song="Best Music in SA" image="/images/song1.jpeg" track="/songs/song1.mp3" />
          <MusicPlayer song="One Hour Remix" image="/images/song2.jpeg" track="/songs/song2.mp3" />
          <MusicPlayer song="Deep house Music" image="/images/song3.jpeg" track="/songs/song3.mp3" />
          <MusicPlayer song="Amapian Mix Part 2" image="/images/song4.jpeg" track="/songs/song4.mp3" />
      </div>
    </div>
  )
}

export default Music;


