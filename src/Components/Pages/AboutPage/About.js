import React from 'react';
import styles from './About.module.scss';
import MemberCards from './AboutComponents/MemberCards';
import Info from './AboutComponents/Info';
import Description from './AboutComponents/Description';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <Description />
            <MemberCards />
            <Info />
        </div>
    );
};

export default About;
