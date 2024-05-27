import React, { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import applyImage from "../images/Apply.jpg";

function Apply(){
    useEffect(() => {
        document.title = "Apply - Denali Projects";
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return(
        <div>
            <Header/>
            <div style = {image}></div>
            <Footer/>
        </div>
    );
}

export default Apply;
const image ={
    display:"flex",
    flexDirection:"column",
    backgroundImage: `url(${applyImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '300px',
};