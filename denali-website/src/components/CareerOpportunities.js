import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CareerOpImage from '../images/CareerOpportunities.jpg';
import Header from './Header';
import Footer from './Footer';
import CareerList from './CareerList';
import Dropdown from 'react-bootstrap/Dropdown';

function CareerOpportunities() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/Careers.json'); // Adjust the path
                setJsonData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        document.title = 'Career Opportunities - Denali Projects';
    }, []);

    const dropdownToggleStyles = {
        color: 'black',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '16pt',
        zIndex: '999',
    };

    const dropDownMenu = {
        border: 'none',
    };

    return (
        <div>
            <Header />
            <div style={titleImage}>
                <p style={mainText}>Will shrink this image, dogs look funny</p>
            </div>
            <div style={content}>
                <div style={navBar}>
                    <p style={{ fontSize: '14pt', marginBottom: '0px', width: '65vw' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam euismod, velit eu tincidunt bibendum, justo nunc lacinia libero, nec dignissim odio nisl vel justo.
                        Fusce vel metus nec purus tincidunt rhoncus.
                        Vivamus euismod, urna in vestibulum aliquet, sapien odio tincidunt libero, et ultrices justo elit ut nunc.
                    </p>
                    <Dropdown>
                        <Dropdown.Toggle style={dropdownToggleStyles} variant="success" id="dropdown-basic">
                            Job Postings
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={dropDownMenu}>
                            {jsonData &&
                                jsonData.map((career) => (
                                    <Dropdown.Item key={career.id} href={`#/career/${career.title}`}>
                                        {career.title}
                                    </Dropdown.Item>
                                ))}
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
    display: 'flex',
    backgroundImage: `url(${CareerOpImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '700px',
};

const mainText = {
    display: 'flex',
    alignItems: 'center',
    color: 'pink',
};

const content = {
    display: 'flex',
    flexDirection: 'column',
};

const navBar = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '50px',
    marginLeft: '50px',
    marginRight: '150px',
};

const jobListings = {};
