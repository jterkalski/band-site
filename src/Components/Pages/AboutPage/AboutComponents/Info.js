import React from 'react';
import styles from '../About.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.infoItem}>
                <div className={styles.infoHeader}>
                    <IoLocationSharp className={styles.infoIcon} size={70} />
                    <div>Lokalizacja</div>
                </div>
                <div className={styles.infoDetails}>Kraków</div>
            </div>
            <div className={styles.infoItem}>
                <div className={styles.infoHeader}>
                    <MdEmail className={styles.infoIcon} size={70} />
                    <div>Kontakt</div>
                </div>
                <div className={styles.infoDetails}>bepis.boys.01@gmail.com</div>
            </div>
        </div>
    );
};

export default Info;
