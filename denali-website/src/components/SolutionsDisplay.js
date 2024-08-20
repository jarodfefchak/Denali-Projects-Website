import React, { useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';
import { motion } from "framer-motion";
import './SolutionsDisplay.css';

function SolutionsDisplay() {
    const location = useLocation();
    const { solutionId } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location]);

    return (
        <div>
             <motion.div
    initial={{ opacity: 0.7 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
  >
            <Header />
            <div className="listSD">
                <h1 className="projects-titleSD"><b>Projects</b></h1>
                <SolutionsList solutionId={solutionId} />
            </div>
            <Footer />
            </motion.div>
        </div>
    );
};

export default SolutionsDisplay;





