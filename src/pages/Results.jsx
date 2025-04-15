import React from "react";
import {Link} from "react-router-dom";
import resultsImage from '../assets/results-image.png?url';

// Styles
import '../css/styles.css';

function Results() {
    return (


    <div className="results-container">
        <h1>What to know how you did?</h1>
        <div className="image-container">
            <img src={resultsImage} alt="chrocheted cute monster" />
        </div>
        <p>Don't worry! You did great. You are doing great</p> 
     
        <div className="button-wrapper">
            <Link to="/end">
             <button className="primary-btn">One last thing before going home ➡️</button>
            </Link>
        </div>
       
    </div>
    
    )
       
}

export default Results;
