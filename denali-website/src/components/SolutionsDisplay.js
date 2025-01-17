import React, { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';
import { motion } from "framer-motion";
import './SolutionsDisplay.css';

function SolutionsDisplay() {
    const location = useLocation();
    const { solutionId } = useParams();
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust 100 to your desired scroll threshold
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <Header />
                <div
                    className={`backToTopButton ${showButton ? "visible" : "hidden"}`}
                >
                    <button onClick={scrollToTop} className="scroll-button">
                        <p>Back To Top &#129121;</p>
                    </button>
                </div>
                <div className="listSD">
                    <SolutionsList solutionId={solutionId} />
                </div>
                <Footer />
            </motion.div>
        </div>
    );
}

export default SolutionsDisplay;
