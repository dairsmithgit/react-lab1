import {useState} from 'react';
import './Ad.css';

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function AdDisplay({flavor, fontSize, darkTheme }: Props) {

    let addClass = "";

    const adFlavorSize = {
        fontSize: fontSize + "px"
    };

    if (darkTheme === true) {
        addClass = " darkTheme";
    } else {
        addClass = " lightTheme";
    }

    return (
        <div className={"AdDisplay" + addClass}>
        <p>Vote For</p>
        <p className="adFlavorKind" style={adFlavorSize}>{flavor}</p>
        </div>
    )

}

export default AdDisplay;