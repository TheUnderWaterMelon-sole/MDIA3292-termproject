import React from "react";
import {Link} from "react-router-dom";
import resultsImage from '../assets/results-image.png?url';

// Styles
import '../css/styles.css';

function Results() {
    return (


    <div className="container results-container">
        <h1>What to know how you did?</h1>
        <div className="image-container">
            <img src={resultsImage} alt="chrocheted cute monster" />
        </div>
        <p>Some explanation about the site goes here</p>
     
        <div className="button-wrapper">
            <Link to="/end">
             <button className="primary-btn">Click</button>
            </Link>
            <Link to="/">
            <button className="home-btn">Go Home</button>
            </Link>
        </div>
       
    </div>
    
    )
       
}

export default Results;