import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons/logo.svg';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="band-logo" />
            <div className={styles.navItems}>
                <Link className={styles.link} to="events">
                    Wydarzenia
                </Link>
                <Link className={styles.link} to="music">
                    Muzyka
                </Link>
                <Link className={styles.link} to="about">
                    O nas
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
