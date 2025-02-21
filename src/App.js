import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Utils/Header';
import HomePage from './components/HomePage/HomePage';
import CompanyPage from './components/Team/CompanyPage';
import Footer from './components/Utils/Footer';
import JoinCommunityPage from './components/JoinCommunityPage';
import ArmAvailablePage from './components/ArmPage/ArmAvailablePage';
import RoadMap from './components/RoadMap/RoadMap';
import BlogPage from './components//Blog/BlogPage';
import BlogPostPage from './components/Blog/BlogPostPage';
import DocumentationPage from './components/Documentation/DocumentationPage';
import ScrollToTop from './components/Animations/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/join-community" element={<JoinCommunityPage />} />
        <Route path="/arm-available" element={<ArmAvailablePage />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/documentation/:type" element={<DocumentationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
