import React from "react";
import Project1Img from '../images/ProvenSuccess/Project1.jpg';
import Project2Img from '../images/ProvenSuccess/Project2.jpg';
import Project3Img from '../images/ProvenSuccess/Project3.jpg';

function ProvenSuccess() {
    const imageList = [
        { src: Project1Img, alt: "Project 1", description: 'Project 1' },
        { src: Project2Img, alt: "Project 2", description: 'Project 2' },
        { src: Project3Img, alt: "Project 3", description: 'Project 3' },
    ];

    return (
        <div style={background}>
            <div style={layout}>
                <p style ={{fontSize:"60pt", margin:"0",}}><b>Proven Success</b></p>
                <p style ={{fontSize:"30pt", marginTop:"50", marginBottom:"100px"}}>Engineering Energy, Empowering Progress</p>
            </div>
            <div style={Success}>
                {imageList.map((image, index) => (
                    <div key={index} style={imageContainer}>
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

export default ProvenSuccess;

const background = {
    backgroundColor: "#e6e6e6",
    backgroundSize: "cover",
    
    margin: "0px",
    padding: "0px",
};

const layout = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: "100px",
    paddingTop: "100px",
    color:"Black",
};

const Success = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1vw',
    marginRight: '1vw',
    paddingBottom:"100px",
};

const imageContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const img = {
    height: '400px',
    width: '450px',
};

const text = {
    backgroundColor: "#374f59",
    textAlign:"center",
    color:"white",
    height: "30px",
    width:"450px",
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: "0",
};
