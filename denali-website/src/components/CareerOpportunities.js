import React, { useEffect } from 'react';
import { useState } from "react";
import CareerOpImage from "../images/CareerOpportunities.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Apply from "./Apply";
import CareerList from './CareerList';
import Dropdown from 'react-bootstrap/Dropdown';


function CareerOpportunities() {
    useEffect(() => {
        document.title = "Career Opportunities - Denali Projects";
    }, []);
    const dropdownToggleStyles = {
        color: 'black',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '16pt',

    };
    const dropDownMenu = {
        border: "none"
    };
    return (
        <div>
            <Header />
            <div style={titleImage}>
                <p style={mainText}>Will shrink this image, dogs look funny</p>
            </div>
            <div style={content}>
                <div style={navBar}>
                    <p style={{ fontSize: "14pt", marginBottom: "0px", width: "65vw", }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam euismod, velit eu tincidunt bibendum, justo nunc lacinia libero, nec dignissim odio nisl vel justo.
                        Fusce vel metus nec purus tincidunt rhoncus.
                        Vivamus euismod, urna in vestibulum aliquet, sapien odio tincidunt libero, et ultrices justo elit ut nunc.
                    </p>
                    <Dropdown>
                        <Dropdown.Toggle style={dropdownToggleStyles} variant="success" id="dropdown-basic">
                            Job Postings
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={dropDownMenu}>
                            <Dropdown.Item href="#/action-1">Posting 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Posting 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Posting 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
                <div style={jobListings}>
                    <CareerList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CareerOpportunities;

const titleImage = {
    display: "flex",
    backgroundImage: `url(${CareerOpImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "700px",
};
const mainText = {
    display: "flex",
    alignItems: "center",
    color: "pink",
};
const content = {
    display: "flex",
    flexDirection: "column",
};
const navBar = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "50px",
    marginLeft: "50px",
    marginRight: "150px",
};
const jobListings = {

};