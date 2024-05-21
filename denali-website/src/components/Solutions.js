import React, { useEffect } from 'react';
import Header from "./Header";

function Solutions(){
    useEffect(() => {
        document.title = "Solutions - Denali Projects";
    }, []);

    return(
        <div>
           <Header/>  
        </div>
    );
};
export default Solutions;