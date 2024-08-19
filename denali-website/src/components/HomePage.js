import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    document.title = "Denali Projects";
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
    {/* // <motion.div
    //   key={renderKey}
    //   initial={{ opacity: 0.85 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.4, ease: 'easeInOut' }}
    // > */}
      <Header onLinkClick={handleLinkClick} />
      <div id="HomeMainSection"><HomeMainSection /></div>
      <ProvenSuccess />
      <Results />
      <div id="Solutions" style={{ minHeight: "85vh" }}><Solutions /></div>
      <InsideDenali />
      <CareersPage />
      <Footer />
     {/* </motion.div> */}
    </div>
  );
}

export default HomePage;
