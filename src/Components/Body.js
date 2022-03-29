import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Music from './Pages/Music';
import Events from './Pages/Events';
import Community from './Pages/Community';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/" element={<Music />}></Route>
                <Route path="/music" element={<Music />}></Route>
                <Route path="/community" element={<Community />}></Route>
            </Routes>
        </div>
    );
};

export default Body;
