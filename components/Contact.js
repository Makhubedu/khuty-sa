import React from 'react'

import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact_conatiner} id="social" >
            <div className="section-heading">Get In Touch With Me</div>
            <div className={styles.details}>
                <div className="phone-number">
                    <span className={styles.detail_name}>&#9742; Phone Number</span><br />
                    <a href="tel:+27833628744" className={styles.detail_value}>076 241 6436</a>
                </div>
                <div className="email-address">
                    <span className={styles.detail_name}>&#9787; Email Address</span><br />
                    <a href="mailto:Khutygeegmail.com" className={styles.detail_value} >Khutygeegmail.com</a>
                </div>
            </div>
            <div className={styles.derrick}>
                &copy; 2021 Developed By Derrick : <a href="mailto:lefaderrick@gmail.com" className={styles.derrick_email} >lefaderrick@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact