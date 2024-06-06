import React from "react";
import Project1Img from '../images/ProvenSuccess/Project1.jpg';
import Project2Img from '../images/ProvenSuccess/Project2.jpg';
import Project3Img from '../images/ProvenSuccess/Project3.jpg';
import './ProvenSuccess.css';

function ProvenSuccess() {
    const imageList = [
        { src: Project1Img, alt: "Project 1", description: 'Project 1' },
        { src: Project2Img, alt: "Project 2", description: 'Project 2' },
        { src: Project3Img, alt: "Project 3", description: 'Project 3' },
    ];

    return (
        <div className="backgroundPS">
            <div className="layoutPS">
                <p className="titlePS"><b>Proven Success</b></p>
                <p className="subtitlePS">Engineering Energy, Empowering Progress</p>
            </div>
            <div className="successPS">
                {imageList.map((image, index) => (
                    <div key={index} className="imageContainerPS">
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="imgPS"
                        />
                        <p className="textPS">{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProvenSuccess;
