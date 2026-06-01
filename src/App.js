import './App.css';
import './animations.css';
import { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import LegalServices from './LegalServices';
import Partners from './Partners';
import StudyDestinations from './StudyDestinations';
import Testimonials from './Testimonials';
import VisaServices from './VisaServices';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      if (hash === '/' || hash === '') {
        setCurrentPage('home');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'legal-services') {
        setCurrentPage('legal-services');
      } else if (hash === 'partners') {
        setCurrentPage('partners');
      } else if (hash === 'study-destinations') {
        setCurrentPage('study-destinations');
      } else if (hash === 'testimonials') {
        setCurrentPage('testimonials');
      } else if (hash === 'visa-services') {
        setCurrentPage('visa-services');
      }
    };

    // Set initial page based on current hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'services' && <Services />}
      {currentPage === 'legal-services' && <LegalServices />}
      {currentPage === 'partners' && <Partners />}
      {currentPage === 'study-destinations' && <StudyDestinations />}
      {currentPage === 'testimonials' && <Testimonials />}
      {currentPage === 'visa-services' && <VisaServices />}
    </div>
  );
}

export default App;
