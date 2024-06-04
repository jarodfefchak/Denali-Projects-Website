import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';
import './SolutionsDisplay.css'; // Import the CSS file

function SolutionsDisplay(){
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, []);
      useEffect(() => {
        document.title = 'Title From access link';
    }, []);
    return(
        <div>
            <Header />
            <div className="listSD">
                <h1 className="projects-titleSD">Projects</h1>
                <SolutionsList/>
            </div>
            <Footer/>
        </div>
    );
};

export default SolutionsDisplay;
