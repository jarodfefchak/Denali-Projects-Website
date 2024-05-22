import React, { useEffect } from 'react';
import HomeMainSection from "./HomeMainSection";
import Solutions from './Solutions';
import ProvenSuccess from './ProvenSuccess';
import InsideDenali from './InsideDenali';
import CareersPage from './CareersPage';
import Footer from "./Footer";
import Header from "./Header";


function HomePage() {
    useEffect(() => {
        document.title = "Denali Projects";
    }, []);

    return (
        <div>
        <Header />
        <HomeMainSection />
        <Solutions />
        <ProvenSuccess/>
        <InsideDenali/>
        <CareersPage/>
        <Footer />
        </div>

    );
};

export default HomePage;