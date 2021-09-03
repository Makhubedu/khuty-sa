import React from 'react'
import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';
import styles from "../styles/Instagram.module.css";

const Instagram = ({token}) => {

    return (
        <div className={styles.instagram_container} id="photos">
            <div className="section-heading">Instagram Feed</div>
            <InstagramFeed 
                token={token}
                counter="10"
            />
        </div>
    )
}

export default Instagram
