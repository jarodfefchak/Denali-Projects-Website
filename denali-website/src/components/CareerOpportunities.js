import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CareerOpImage from '../images/CareerOpportunities.jpg';
import Header from './Header';
import Footer from './Footer';
import CareerList from './CareerList';
import NoCareers from './NoCareers'; 
import './CareerOpportunities.css';

function CareerOpportunities() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/Careers.json'); // Adjust the path if necessary
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

    if (!jsonData || jsonData.length === 0) {
        return (
            <div>
                <Header />
                <NoCareers />
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="titleImageOP" style={{ backgroundImage: `url(${CareerOpImage})` }}>
            </div>
            <div className="contentOP">
                <div className="navBarOP">
                    <p className="navBarTextOP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam euismod, velit eu tincidunt bibendum, justo nunc lacinia libero, nec dignissim odio nisl vel justo.
                        Fusce vel metus nec purus tincidunt rhoncus.
                        Vivamus euismod, urna in vestibulum aliquet, sapien odio tincidunt libero, et ultrices justo elit ut nunc.
                    </p>
                    {/* <Dropdown>
                        <Dropdown.Toggle className="dropdownToggleOP" variant="success" id="dropdown-basicOP">
                            Job Postings
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdownMenuOP">
                            {jsonData &&
                                jsonData.map((career) => (
                                    <Dropdown.Item key={career.id} href={`#/career/${career.title}`}>
                                        {career.title}
                                    </Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown> */}
                </div>
                <div className="jobListingsOP">
                    <CareerList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CareerOpportunities;


