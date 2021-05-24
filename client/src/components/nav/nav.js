import React from "react";
import "./styles.css" 

function Nav () {
    return (
        <nav className="navigation">
            <h1 className="navigation_title">YalamFood</h1>
            <input type="text" placeholder="Enter your Address" id="address" name="address" size="10" />
            <button id="cart">image</button>
            <button id="login">Login</button>
        </nav>
    )
}

export default Nav