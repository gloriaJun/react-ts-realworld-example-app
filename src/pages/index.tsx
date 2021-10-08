import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTES } from '../constants';

import Home from './Home';
import Login from './Login';
import Settings from './Settings';
import Editor from './Editor';
import Article from './Article';
import Profile from './Profile';

export default function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.ARTICLE} element={<Article />} />
        <Route path={ROUTES.EDITOR} element={<Editor />} />
        <Route path={ROUTES.SETTING} element={<Settings />} />
        {/* TODO find way to group -- start */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Login />} />
        {/* TODO find way to group -- end */}
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
