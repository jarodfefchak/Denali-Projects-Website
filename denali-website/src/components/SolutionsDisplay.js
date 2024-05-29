import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';



function SolutionsDisplay(){
return(
    <div>
        <Header />
        <h1 style = {{paddingTop:"150px"}}>Projects</h1>
        <SolutionsList/>
        <Footer/>
    </div>
);
};

export default SolutionsDisplay;