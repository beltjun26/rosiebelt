import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { Home } from './Pages/Loading/Home/Home';
import { Loading } from './Pages/Loading/Loading';

export const App: React.FC = ()  => {
  const [isLoading, setIsLoading] = useState(true);
  
  setTimeout(() => setIsLoading(false), 2000);
  return (
    <ParallaxProvider>
      { isLoading ?  <Loading /> :
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
      </Router>
      }
      
    </ParallaxProvider>
  );
}