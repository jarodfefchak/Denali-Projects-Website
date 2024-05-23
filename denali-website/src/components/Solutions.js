
import React from 'react';

import autoImage from '../images/Solutions/automationInstrumentation.jpg';
import elecImage from '../images/Solutions/electricalEngineering.jpg';
import mecImage from '../images/Solutions/mechanicalEngineering.jpg';
import processImage from '../images/Solutions/processEngineering.jpg';
import procureImage from '../images/Solutions/procurementServices.jpg';
import projectImage from '../images/Solutions/projectManagement.jpg';

function Solutions() {
    const imageList = [
        { src: mecImage, alt: 'Mechanical Engineering' ,description: 'Mechanical Engineering' } ,
        { src: elecImage, alt: 'Electrical Engineering',description: 'Electrical Engineering' },
        { src: autoImage, alt: 'Automation and Instrumentation' ,description: 'Automation and Instrumentation'},
        { src: processImage, alt: 'Process Engineering',description: 'Process Engineering' },
        { src: projectImage, alt: 'Project Management',description: 'Project Management' },
        { src: procureImage, alt: 'Procurement Services',description: 'Procurement Services' },
    ];

    return (
        <div style={background}>
             <h1 style={heading}>Solutions We Offer</h1>
            
            <div style={solutions}>
                {imageList.map((image, index) => (
                    <div key ={index}>
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        style={img}
                    />
                    <p style={text}>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Solutions;

const background = {
    display:"flex",
    flexDirection:"column",
    backgroundColor: '#e0e6e9',
    backgroundSize: 'cover',
    margin: '0px',
    padding: '0px',
};

const heading = {
    marginLeft: '20px',
    fontSize: '25pt',
};

const solutions = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft:"1vw",
    marginRight:"1vw",
    marginBottom:"20px",
    
};

const img = {
    height: '400px',
    width: '450px',
    paddingLeft:"1vw",
    paddingRight:"1vw",
};
const text ={
   paddingLeft:'1vw',
   marginBottom:"25px",
   //backgroundColor:"#6a696b",
};
