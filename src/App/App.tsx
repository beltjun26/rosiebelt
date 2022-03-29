import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { Home } from './Pages/Loading/Home/Home';
import { Loading } from './Pages/Loading/Loading';

export const App: React.FC = ()  => {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}