import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {
    const [ adFlavor, setFlavor ] = useState("");

    function changeFlavorCookie() {
        setFlavor("Cookies & Cream");
    }
    function changeFlavorVanilla() {
        setFlavor("Vanilla Bean");
    }
    function changeFlavorMatcha() {
        setFlavor("Matcha Tea");
    }

    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className="adBox">
                <p>Vote For</p>
                <p className="adFlavor">{adFlavor}</p>
            </div>
            <h2>What to Support</h2>
            <p>
                <button onClick={changeFlavorCookie}>Cookies &amp; Cream</button>
                <button onClick={changeFlavorVanilla}>Vanilla Bean</button>
                <button onClick={changeFlavorMatcha}>Matcha Tea</button>
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