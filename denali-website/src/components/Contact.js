import React, { useEffect } from 'react';
import Header from "./Header";

function Contact(){
    useEffect(() => {
        document.title = "Contact Us - Denali Projects";
    }, []);

    return(
        <div>
            <Header/> 
        </div>
    );
}

export default Contact;
