import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./noCareers.css";

function NoCareers() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div className="contentNC">
        <p className="textNC">
          There are no Career Opportunities at the moment. If you believe you
          would be a great fit for our team, please contact us.
        </p>
        <Link to="/Contact">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`buttonNC ${hover ? "button-hoverNC" : ""}`}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoCareers;
