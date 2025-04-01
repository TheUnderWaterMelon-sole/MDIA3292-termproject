import React from "react";
import {Link} from "react-router-dom";
import crochetMonster from '../assets/crochet-creature.png?url';

// Styles
import '../css/styles.css';

function Results() {
    return (


    <div>
        <h1>This is the Results page</h1>
        <div className="image-container">
            <img src={crochetMonster} alt="chrocheted cute monster" />
        </div>
        <p>Some explanation about the site goes here</p>
        <Link to="/end">
        <button className="primary-btn">Click</button>
      </Link>
    </div>
    
    )
       
}

export default Results;