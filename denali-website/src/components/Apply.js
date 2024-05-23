import React, { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Apply(){
    useEffect(() => {
        document.title = "Apply - Denali Projects";
    }, []);

    return(
        <div>
            <Header/>
            <h1>Apply</h1> 
    
            <Footer/>
        </div>
    );
}

export default Apply;