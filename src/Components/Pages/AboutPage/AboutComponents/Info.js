import React from 'react';
import styles from '../About.module.scss';

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.infoItem}>Location: Kraków, Poland</div>
            <div className={styles.infoItem}>Contact: bepis.boys.01@gmail.com</div>
        </div>
    );
};

export default Info;
