import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeoBg from './components/GeoBg';
import Home from './pages/Home';
import About from './pages/About';
import JobSeekers from './pages/JobSeekers';
import Employers from './pages/Employers';
import JobBoard from './pages/JobBoard';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './styles/global.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <>
      <GeoBg />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}