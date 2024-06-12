import React, { useEffect } from 'react';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import ProvenSuccess from './ProvenSuccess';
import Results from './Results';
import Solutions from './Solutions';
import InsideDenali from './InsideDenali';
import CareersPage from './CareersPage';
import Footer from './Footer';

function HomePage() {
    useEffect(() => {
        document.title = "Denali Projects";
    }, []);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        };

        const hashChangeListener = () => {
            if (window.location.hash) {
                const id = window.location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({behavior: 'instant'});
                }
            } else {
                scrollToTop();
            }
        };

        window.addEventListener('hashchange', hashChangeListener);
        hashChangeListener();

        return () => {
            window.removeEventListener('hashchange', hashChangeListener);
        };
    }, []);

    return (
        <div>
            <Header />
            <HomeMainSection /> 
            <ProvenSuccess/>
            <Results/>
            <div id="Solutions" style={{minHeight:"85vh"}}><Solutions /></div>
            <InsideDenali/>
            <CareersPage/>
            <Footer />
        </div>
    );
}

export default HomePage;
