
import React from 'react';

// Import your image files
import autoImage from '../images/Solutions/automationInstrumentation.jpg';
import elecImage from '../images/Solutions/electricalEngineering.jpg';
import mecImage from '../images/Solutions/mechanicalEngineering.jpg';
import processImage from '../images/Solutions/processEngineering.jpg';
import procureImage from '../images/Solutions/procurementServices.jpg';
import projectImage from '../images/Solutions/projectManagement.jpg';

function Solutions() {
    const imageList = [
        { src: mecImage, alt: 'Mechanical Engineering' },
        { src: elecImage, alt: 'Electrical Engineering' },
        { src: autoImage, alt: 'Automation and Instrumentation' },
        { src: processImage, alt: 'Process Engineering' },
        { src: projectImage, alt: 'Project Management' },
        { src: procureImage, alt: 'Procurement Services' },
    ];

    return (
        <div style={background}>
            <div style={text}>
                <p>Solutions We Offer</p>
            </div>
            <div style={solutions}>
                {imageList.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        style={img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Solutions;

const background = {
    backgroundColor: '#ffffff',
    backgroundSize: 'cover',
    margin: '0px',
    padding: '0px',
};

const text = {
    display: 'flex',
    
};

const solutions = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft:"10vw",
    marginRight:"10vw",
};

const img = {
    height: '400px',
    width: '350px',
    padding: '1vw',
};
