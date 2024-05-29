import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SolutionsList from './SolutionsList';



function SolutionsDisplay(){
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, []);
      useEffect(() => {
        document.title = 'Title From access link';
    }, []);
return(
    <div>
        <Header />
        <div style ={list}>
        <h1 style = {{paddingTop:"50px"}}>Projects</h1>
        <SolutionsList/>
        </div>
        <Footer/>
    </div>
);
};

export default SolutionsDisplay;

const list ={
padding:"100px",
};