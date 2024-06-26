import React from "react";
import styles from './footer.module.scss';

export const Footer = () => {
    return (

        <footer>
            <div>
                <h2 className={styles.title}>
                    Contact
                </h2>
            </div>
            <section className={styles.contSection}>
                <div className={styles.firstDiv} >
                    <h3>Phone</h3>
                    <p>+49 999 999 99 99</p>
                </div>
                <div className={styles.secondDiv}>
                    <h3>Address</h3>
                    <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
                </div >
                <div className={styles.thirdDiv}>
                    <h3>Working Hours</h3>
                    <p>24 hours a day</p>
                </div>
                <div className={styles.fourthDiv}>
                    <h3>Socials</h3>
                    <p>instaggram</p>
                </div>
            </section>

            <div className={styles.mapConteiner}>
            <iframe width="1360" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1280&amp;height=764&amp;hl=en&amp;q=52.5030591,13.364968&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            </div>




        </footer>


    );
};
