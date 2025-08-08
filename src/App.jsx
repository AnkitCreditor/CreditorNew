import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from '../src/components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import LandingPage from '../src/pages/LandingPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
