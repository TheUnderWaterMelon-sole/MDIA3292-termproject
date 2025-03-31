// Home.jsx

import React from "react";
import crochetMonster from '../assets/crochet-creature.png?url';

function Home() {
    return (


    <div>
        <h1>This is the Home page</h1>
        <div className="image-container">
            <img src={crochetMonster} alt="chrocheted cute monster" />
        </div>
        <p>Some explanation about the site goes here</p>
         <button>Click</button>
    </div>
    
    )
       
}

export default Home;