import { useState } from 'react';
import './Votes.css';

function Votes() {

    return (
        <div className="Votes">
            <h1>Vote Here</h1>
            <p>
               <button>Cookies &amp; Cream</button>
               <button>Vanilla Bean</button>
               <button>Matcha Tea</button>
            </p>
        </div>
    )
}



export default Votes;