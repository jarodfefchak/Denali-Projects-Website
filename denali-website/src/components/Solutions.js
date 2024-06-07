import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import FEEDStudies from '../images/Solutions/FEEDStudies.jpg';
import FieldProjects from '../images/Solutions/brownAndGreenfieldProjects.jpg';
import OilFacilities from '../images/Solutions/conventionalOilFacilities.jpg';
import WellPads from '../images/Solutions/wellPads.jpg';
import sweetSourGas from '../images/Solutions/sweetSourGas.jpg';
import compressorStations from '../images/Solutions/compressorStations.jpg';
import waterTreatment from '../images/Solutions/waterTreatment.jpg';
import WellTieIns from '../images/Solutions/wellTieIns.jpg';
import LACTUnits from '../images/Solutions/LACTUnits.jpg';

import './Solutions.css';

function Solutions() {
    const [visibility, setVisibility] = useState({});

    const handleVisibilityChange = (index, isVisible) => {
        if (isVisible && !visibility[index]) {
            setVisibility((prev) => ({ ...prev, [index]: true }));
        }
    };

    const imageList = [
        { src: FEEDStudies, alt: 'FEED Studies', description: 'FEED Studies', loading: "lazy" },
        { src: FieldProjects, alt: 'Field Projects', description: 'Brown and Greenfield Projects', loading: "lazy" },
        { src: OilFacilities, alt: 'Oil Facilities', description: 'Conventional Oil Facilities', loading: "lazy" },
        { src: WellPads, alt: 'Well Pads', description: 'Well Pads', loading: "lazy" },
        { src: sweetSourGas, alt: 'Sweet Sour Gas', description: 'Sweet/Sour Gas and Liquid Processing Facilities', loading: "lazy" },
        { src: compressorStations, alt: 'Compressor Stations', description: 'Compressor Stations', loading: "lazy" },
        { src: waterTreatment, alt: 'Water Treatment', description: 'Produced Water Treatment/Storage/Injection', loading: "lazy" },
        { src: WellTieIns, alt: 'Well Tie Ins', description: 'Well Tie Ins and Gathering Systems', loading: "lazy" },
        { src: LACTUnits, alt: 'LACT Units', description: 'LACT Units', loading: "lazy" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0,
            transition: {
                staggerChildren: 2.5,
                delay: 0.2,
                duration:1.2,
                ease: "easeInOut",
            }
         }
        
    };

    return (
        <div style={background}>
            <h1 className="headingS">Solutions We Offer</h1>
            <motion.div
                className="solutionsS"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {imageList.map((image, index) => (
                    <VisibilitySensor
                        key={index}
                        onChange={(isVisible) => handleVisibilityChange(index, isVisible)}
                        partialVisibility
                    >
                        {({ isVisible }) => (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate={visibility[index] ? 'visible' : 'hidden'}
                                className="imageContainerS"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="imgS"
                                    loading="lazy"
                                />
                                <p className="textS">{image.description}</p>
                            </motion.div>
                        )}
                    </VisibilitySensor>
                ))}
            </motion.div>
        </div>
    );
}

export default Solutions;

const background = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#f6f6f6',
    backgroundSize: 'cover',
    margin: '0px',
    padding: '0px',
};
