import React from "react";
import "./style.css";

function Navbar() {
    return (
        // Using materialize CSS
        <nav className="navStyle">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right">Employee Directory</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar