import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';
import './SolutionsDisplay.css';

function SolutionsDisplay() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location]);

    useEffect(() => {
        document.title = 'Title From access link';
    }, [location]);

    return (
        <div key={location.pathname}> {/* Force re-render on location change */}
            <Header />
            <div className="listSD">
                <h1 className="projects-titleSD">Projects</h1>
                <SolutionsList />
            </div>
            <Footer />
        </div>
    );
};

export default SolutionsDisplay;


