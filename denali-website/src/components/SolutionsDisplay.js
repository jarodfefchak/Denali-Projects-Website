import React, { useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';
import './SolutionsDisplay.css';

function SolutionsDisplay() {
    const location = useLocation();
    const { solutionId } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location]);

    return (
        <div>
            <Header />
            <div className="listSD">
                <h1 className="projects-titleSD">Projects</h1>
                <SolutionsList solutionId={solutionId} />
            </div>
            <Footer />
        </div>
    );
};

export default SolutionsDisplay;





