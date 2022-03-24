import React from 'react';
import './Body.scss';
import { Routes, Route } from 'react-router-dom';
import Music from './Pages/Music';
import Events from './Pages/Events';
import Community from './Pages/Community';

const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path={process.env.REACT_APP_SITE_PATH + '/events'} element={<Events />}></Route>
        <Route path={process.env.REACT_APP_SITE_PATH + '/'} element={<Music />}></Route>
        <Route path={process.env.REACT_APP_SITE_PATH + '/music'} element={<Music />}></Route>
        <Route path={process.env.REACT_APP_SITE_PATH + '/community'} element={<Community />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
