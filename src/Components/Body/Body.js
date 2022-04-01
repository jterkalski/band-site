import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Music from '../Pages/MusicPage/Music';
import Events from '../Pages/EventsPage/Events';
import About from '../Pages/AboutPage/About';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/" element={<Music />}></Route>
                <Route path="/music" element={<Music />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
};

export default Body;
