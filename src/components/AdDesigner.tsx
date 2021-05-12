import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {


    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className="adBox">
                <p>Vote For</p>
                <p className="adFlavor"></p>
            </div>
            <h2>What to Support</h2>
            <p>
                <button>Cookies &amp; Cream</button>
                <button>Vanilla Bean</button>
                <button>Matcha Tea</button>
            </p>
            <h2>Color Theme</h2>
            <p>
                <button>Light</button>
                <button>Dark</button>
            </p>
            <h2>Font Size</h2>
            <button>Down</button>
            
            <button>Up</button>
        </div>
    )
}



export default AdDesigner;