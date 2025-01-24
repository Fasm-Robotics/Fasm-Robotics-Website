import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CompanyPage from './components/CompanyPage';
import Footer from './components/Footer';
import JoinCommunityPage from './components/JoinCommunityPage';
import ArmAvailablePage from './components/ArmAvailablePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/join-community" element={<JoinCommunityPage />} />
        <Route path="/arm-available" element={<ArmAvailablePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
