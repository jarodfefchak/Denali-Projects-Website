import React from 'react';

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
    const imageList = [
        { src: FEEDStudies, alt: 'FEED Studies', description: 'FEED Studies' , loading: "lazy"},
        { src: FieldProjects, alt: 'Field Projects', description: 'Brown and Greenfield Projects', loading: "lazy" },
        { src: OilFacilities, alt: 'oil Facilities', description: 'Conventional Oil Facilities' , loading: "lazy"},
        { src: WellPads, alt: 'Well Pads', description: 'Well Pads', loading: "lazy" },
        { src: sweetSourGas, alt: 'Sweet Sour Gas', description: 'Sweet/Sour Gas and Liquid Processing Facilities', loading: "lazy" },
        { src: compressorStations, alt: 'compressor Stations', description: 'Compressor Stations', loading: "lazy" },
        { src: waterTreatment, alt: 'water Treatment', description: 'Produced Water Treatment/Storage/Injection', loading: "lazy" },
        { src: WellTieIns, alt: 'Well Tie Ins', description: 'Well Tie Ins and Gathering Systems', loading: "lazy" },
        { src: LACTUnits, alt: 'LACT Units', description: 'LACT Units', loading: "lazy"},
    ];

    return (
        <div style ={background}>
            <h1 className="headingS">Solutions We Offer</h1>
            <div className="solutionsS">
                {imageList.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="imgS"
                        />
                        <p className="textS">{image.description}</p>
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