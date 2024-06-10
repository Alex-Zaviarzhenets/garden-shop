import React from "react";
import styles from './footer.module.scss';

export const Footer = () => {
    return (

<footer>
            <div>
                <h2>
                    Contact
                </h2>
            </div>
            <section className={styles.contSection}>
                <div className={styles.longDivCont}>
                    <h3>Phone</h3>
                    <p>+49 999 999 99 99</p>
                </div>
                <div className={styles.shortDivCont}>
                    <h3>Address</h3>
                    <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
                </div >
                <div className={styles.longDivCont}>
                    <h3>Working Hours</h3>
                    <p>24 hours a day</p>
                </div>
                <div className={styles.shortDivCont}>
                    <h3>Socials</h3>
                    <p>instaggram</p>
                </div>
            </section>



    
        </footer>

        
    );
};
