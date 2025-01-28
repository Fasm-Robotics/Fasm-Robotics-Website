import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CompanyPage from './components/CompanyPage';
import Footer from './components/Footer';
import JoinCommunityPage from './components/JoinCommunityPage';
import ArmAvailablePage from './components/ArmAvailablePage';
import RoadMap from './components/RoadMap';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/join-community" element={<JoinCommunityPage />} />
        <Route path="/arm-available" element={<ArmAvailablePage />} />
        <Route path="/roadmap" element={<RoadMap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
