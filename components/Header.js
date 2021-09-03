import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Navigation from './Navigation'
import Link from 'next/link'

const Header = () => {

    return (
        <div className={`${styles.header_container}`} >
            <Navigation />
            <div className={styles.hero_image}>
                <Image
                    src="/images/hero.png"
                    alt="Header image"
                    height="900"
                    width="800"
                />
            </div>
            <div className={styles.book_me}>
                <Link href="mailto:Khutygeegmail.com" ><a>Book Me</a></Link>
                <Link href="https://www.youtube.com/channel/UCLax_DcoC7UY_6zhTQe0I_Q" ><a target="_blank" >Download My Hits</a></Link>
                <Link href="#youtube" ><a>Watch Me Live</a></Link>
                <Link href="#social" ><a>Follow me on Social Media</a></Link>
            </div>
        </div>
    )
}

export default Header
