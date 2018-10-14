import React from "react";
// import "./Header.css";

const subtitleStyle = {
    textAlign: "center"
}

const Header = () => (
    <div id="header">
        <h1>The New York Times Scraper in React</h1>
        <p style={subtitleStyle}>Search for articles and save them</p>
    </div>
);

export default Header;