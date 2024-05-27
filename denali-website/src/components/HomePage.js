import React, { useEffect } from 'react';
import HomeMainSection from "./HomeMainSection";
import Solutions from './Solutions';
import ProvenSuccess from './ProvenSuccess';
import InsideDenali from './InsideDenali';
import CareersPage from './CareersPage';
import Footer from "./Footer";
import Header from "./Header";
import Results from "./Results";



function HomePage() {
    useEffect(() => {
        document.title = "Denali Projects";
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, []);

    return (
        <div>
        <Header />
        <HomeMainSection /> 
        <ProvenSuccess/>
        <Results/>
        <Solutions />
        <InsideDenali/>
        <CareersPage/>
        <Footer />
        </div>

    );
};

export default HomePage;