import React from "react";
import {Link} from "react-router-dom";
import endImage from '../assets/end-image.gif';

// Styles
import '../css/styles.css';

function End() {
    return (


    <div className="container end-container">
        <h1>Put "8min" video here</h1>
        <div className="image-container">
            <img src={endImage} alt="chrocheted cute monster" />
        </div>
        <p>Some explanation about the site goes here</p>
     
        <div className="button-wrapper">
            <Link to="/">
            <button className="home-btn">Go Home</button>
            </Link>
        </div>
       
    </div>
    
    )
       
}

export default End;