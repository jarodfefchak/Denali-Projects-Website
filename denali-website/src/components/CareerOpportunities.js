import React, { useEffect } from 'react';
import CareerOpImage from "../images/CareerOpportunities.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Apply from "./Apply";


function CareerOpportunities(){
    useEffect(() => {
        document.title = "Career Opportunities - Denali Projects";
    }, []);

    return(
        <div>
            <Header/>
            <div style = {titleImage}>
                <p style={mainText}>Will shrink this image, dogs look funny</p>
            </div> 
            
            <Footer/>
        </div>
    );
}

export default CareerOpportunities;

const titleImage={
    display:"flex",
    backgroundImage: `url(${CareerOpImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "700px",
};
const mainText={
    display: "flex",
 
  alignItems: "center",
  color: "pink",
};
