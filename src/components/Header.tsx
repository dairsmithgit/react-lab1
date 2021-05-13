import { useState } from 'react';
import './Header.css';

interface Props {
    name: string;
}

function Header({name}: Props) {
    return (
        <div>
            <header className="Header">
                <p className="headerTitle">Ice Cream Wars</p>
                <p className="headerName">Welcome {name}</p>
            </header>

        </div>
    )
}

export default Header;