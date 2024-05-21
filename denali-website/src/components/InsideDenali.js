import React from "react";

function InsideDenali(){
    return(
        <div style = {background}>
            <div style = {text}>
            <h2>Inside Denali</h2>
            </div>  
        </div>
    );
};

export default InsideDenali;

const background = {
    backgroundColor: "#9db3c1",
    backgroundSize:"cover",
    height: "100vh",
    margin: "0px",
    padding: "0px",
};
const text ={
    display: 'flex',
    flexDirection: 'column',
}