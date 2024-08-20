import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import ProvenSuccess from './ProvenSuccess';
import Results from './Results';
import Solutions from './Solutions';
import InsideDenali from './InsideDenali';
import CareersPage from './CareersPage';
import Footer from './Footer';

function HomePage() {
  const [renderKey, setRenderKey] = useState(0);
  const [isHomeMainSectionVisible, setHomeMainSectionVisible] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    document.title = "Denali Projects";

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHomeMainSectionVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this value to control when the visibility should change
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    const scrollToHashElement = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'instant' });
        }
      } else {
        scrollToTop();
      }
    };

    const hashChangeListener = () => {
      scrollToHashElement();
    };

    window.addEventListener('hashchange', hashChangeListener);
    scrollToHashElement(); 

    return () => {
      window.removeEventListener('hashchange', hashChangeListener);
    };
  }, [renderKey]);

  const handleLinkClick = () => {
    setRenderKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <motion.div
        key={renderKey}
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <Header onLinkClick={handleLinkClick} />
        <div
          id="HomeMainSection"
          style={{ display: isHomeMainSectionVisible ? 'block' : 'none' }}
        >
          <HomeMainSection />
        </div>
        <div style={{ backgroundColor: "#f6f6f6" }}>
          <ProvenSuccess />
          <Results />
          <div id="Solutions" style={{ minHeight: "85vh" }}><Solutions /></div>
          <InsideDenali />
          <CareersPage />
          </div>
          <div ref={footerRef}>
            <Footer />
            </div>
      </motion.div>
    </div>
  );
}

export default HomePage;


