import React, { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    useEffect(() => {
        document.title = "Career Opportunities - Denali Projects";
    }, []);

    return(
        <div>
            <Header/>
            <h1>Your Future With Denali</h1> 
            <Footer/>
        </div>
    );
}

export default Contact;