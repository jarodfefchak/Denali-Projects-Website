import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CareersPage.css"

const CareersPage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div style ={background}>
      <div className="text">
        <p className="header">
          <b>Your Future With Denali</b>
        </p>
        <p>Let's build the future of energy together.</p>
        <p>
          Are you ready to power up your career with a dynamic and innovative
          company in the energy sector? At Denali, you will work on exciting
          projects that drive sustainable solutions, collaborate with industry
          experts, and grow your career in a supportive and forward-thinking
          environment. If you're passionate about making a real impact and eager
          to be a part of a company that values creativity, integrity, and
          excellence, Denali is the perfect place for you.
        </p>
      </div>
      <Link to="/CareerOpportunities">
        <button 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} 
          className={`buttonCP ${hover ? 'button-hover' : ''}`}
        >
          CAREER OPPORTUNITIES
        </button>
      </Link>
    </div>
  );
};

export default CareersPage;

const background={
  color: "black",
  backgroundColor: "#f6f6f6",
  margin: '0px',
  padding: '0px',
}