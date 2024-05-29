
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

function Solutions() {
    const imageList = [
        { src: FEEDStudies, alt: 'FEED Studies' ,description: 'FEED Studies' } ,
        { src: FieldProjects, alt: 'Field Projects',description: 'Brown and Greenfield Projects' },
        { src: OilFacilities, alt: 'oil Facilities' ,description: 'Conventional Oil Facilities'},
        { src: WellPads, alt: 'Well Pads',description: 'Well Pads' },
        { src: sweetSourGas, alt: 'Sweet Sour Gas',description: 'Sweet/Sour Gas and Liquid Processing Facilities' },
        { src: compressorStations, alt: 'compressor Stations',description: 'Compressor Stations' },
        { src: waterTreatment, alt: 'water Treatment',description: 'Produced Water Treatment/Storage/Injection' },
        { src: WellTieIns, alt: 'Well Tie Ins ',description: 'Well Tie Ins and Gathering Systems' },
        { src: LACTUnits, alt: 'LACT Units',description: 'LACT Units' },
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
    marginLeft:"100px",
    marginTop:"50px",
    marginBottom:"25px",
    fontSize: '60pt',
};

const solutions = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin:"20px",
    
};

const img = {
    height: '400px',
    width: '450px',
    margin:"10px",
};
const text ={
   paddingLeft:'1vw',
   marginBottom:"25px",
   //backgroundColor:"#6a696b",
};
