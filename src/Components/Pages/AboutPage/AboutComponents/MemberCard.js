import React from 'react';
import styles from '../About.module.scss';

const MemberCard = ({ member, icon }) => {
    return (
        <div className={styles.memberCard}>
            <div className={styles.memberAvatar}>
                <div className={styles.memberIconContainer}>
                    <img className={styles.memberIcon} src={icon} alt={'asd'} />
                </div>
                <div className={styles.instrumentName}>{member.instrument}</div>
            </div>
            <div className={styles.memberName}>{member.name}</div>
        </div>
    );
};

export default MemberCard;
