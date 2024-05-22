import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';


const CareersPage = () => {
  
  const [hover,setHover] = useState(false);
  const button = {
    color: "#374f59",
    marginLeft: '5%',
    marginTop:"40px",
    backgroundColor:"white",
    border: "0px",
    width:"400px",
    height:"90px",
    fontSize: "25pt",
    cursor: "pointer",
    ...(hover?{
      boxShadow: "1px 1px 20px #000000",
    }:null),
  };
  return (
    <div style={background}>
      <div style={gradient} />
      <div style={text}>
        <p style={{ fontSize: '3.5em', marginTop :"100px" }}>
          <b>Your Future With Denali</b>
        </p>
        <p style={{ fontSize: '1.5em' }}>
          Let's build the future of energy together.
        </p>
        <p style={{ fontSize: '1.5em' }}>
          Are you ready to power up your career with a dynamic and innovative
          company in the energy sector? At Denali, you will work on exciting
          projects that drive sustainable solutions, collaborate with industry
          experts, and grow your career in a supportive and forward-thinking
          environment. If you're passionate about making a real impact and eager
          to be a part of a company that values creativity, integrity, and
          excellence, Denali is the perfect place for you.
        </p>
      </div>
      <Link to = "/CareerOpportunities" >
        <button onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} style = {button}>Career Opportunities</button>
      </Link>
    </div>
  );
};

export default CareersPage;

const background = {
  color: 'white',
  backgroundColor: '#374f59',
  height: '79vh',
  margin: '0px',
  padding: '0px',
};

const gradient = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '4px', 
  backgroundImage: 'linear-gradient(180deg, #9db3c1, #374f59)',
};

const text = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '5%',
  marginRight: '12.5%',
};

