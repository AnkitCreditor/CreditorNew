import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// Import your Page Components
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Membership from './pages/MembershipMC';
// Courses
import JuniorOP from './courses/JuniorOP';
import SeniorPB from './courses/SeniorPB';
import SOVandBP from './courses/SOVandBP';
// Services
import Athena from './services/Athena';
import LiveClass from './services/LiveClass';
import MerchantProcessing from './services/MerchantProcessing';
import WebsiteService from './services/WebsiteService';

// You can also import ScrollToTop if required
// import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Suspense fallback={<Loader />}>
        <div style={{ marginTop: 80 /* adjust for fixed navbar */ }}>
          <Routes>
            {/* Home/Landing */}
            <Route path="/" element={<LandingPage />} />

            {/* Contact & Other Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />

            {/* Courses */}
            <Route path="/courses/become-private" element={<SOVandBP />} />
            <Route path="/courses/operate-private" element={<JuniorOP />} />
            <Route path="/courses/business-credit" element={<SeniorPB />} />

            {/* Services */}
            <Route path="/services/live-class" element={<LiveClass />} />
            <Route path="/services/athena-lms" element={<Athena />} />
            <Route path="/services/website-creation" element={<WebsiteService />} />
            <Route path="/services/merchant-processing" element={<MerchantProcessing />} />

            {/* Fallback: Not Found or more routes if you wish */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
