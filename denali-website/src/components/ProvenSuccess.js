import React from "react";

function ProvenSuccess(){
    return(
        <div style = {background}>
            <div style = {text}>
            <h2>Proven Success</h2>
            </div>  
        </div>
    );
};

export default ProvenSuccess;

const background = {
    backgroundColor: "#6a696b",
    backgroundSize:"cover",
    height: "100vh",
    margin: "0px",
    padding: "0px",
};
const text ={
    display: 'flex',
    flexDirection: 'column',
}