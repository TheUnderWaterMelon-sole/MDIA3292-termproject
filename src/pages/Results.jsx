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
        <p>Don't worry! Thanks for telling us your mind.</p> 
     
        <div className="button-wrapper">
            <Link to="/">
            <button className="home-btn">Go Home</button>
            </Link>
            <Link to="/end">
             <button className="primary-btn">Next</button>
            </Link>
        </div>
       
    </div>
    
    )
       
}

export default Results;
