import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {
    const [ adFlavor, setFlavor ] = useState("Cookies & Cream");
    const [ adTheme, setTheme ] = useState(" lightTheme");
    let addClassCookie = "";
    let addClassVanilla = "";
    let addClassMatcha = "";
    let addClassLight = "";
    let addClassDark = "";

    if (adFlavor === "Cookies & Cream") {
        addClassCookie = " buttonDisabled";
    } else {
        addClassCookie = " buttonActive";
    }

    if (adFlavor === "Vanilla Bean") {
        addClassVanilla = " buttonDisabled";
    } else {
        addClassVanilla = " buttonActive";
    }

    if (adFlavor === "Matcha Tea") {
        addClassMatcha = " buttonDisabled";
    } else {
        addClassMatcha = " buttonActive";
    }

    if (adTheme === " lightTheme") {
        addClassLight = " buttonDisabled";
    } else {
        addClassLight = " buttonActive";
    }

    if (adTheme === " darkTheme") {
        addClassDark = " buttonDisabled";
    } else {
        addClassDark = " buttonActive";
    }

    function changeFlavorCookie() {
        setFlavor("Cookies & Cream");
    }
    function changeFlavorVanilla() {
        setFlavor("Vanilla Bean");
    }
    function changeFlavorMatcha() {
        setFlavor("Matcha Tea");
    }

    function changeThemeLight() {
        setTheme(" lightTheme");
    }

    function changeThemeDark() {
        setTheme(" darkTheme");
    }

    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <div className={"adBox" + adTheme}>
                <p>Vote For</p>
                <p className="adFlavor">{adFlavor}</p>
            </div>
            <h2>What to Support</h2>
            <p>
                <button className={addClassCookie} onClick={changeFlavorCookie}>Cookies &amp; Cream</button>
                <button className={addClassVanilla} onClick={changeFlavorVanilla}>Vanilla Bean</button>
                <button className={addClassMatcha} onClick={changeFlavorMatcha}>Matcha Tea</button>
            </p>
            <h2>Color Theme</h2>
            <p>
                <button className={addClassLight} onClick={changeThemeLight}>Light</button>
                <button className={addClassDark} onClick={changeThemeDark}>Dark</button>
            </p>
            <h2>Font Size</h2>
            <button>Down</button>

            <button>Up</button>
        </div>
    )
}



export default AdDesigner;