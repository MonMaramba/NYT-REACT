import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import "./NavTabs.css";



const NavTabs = () => (
    <Nav bsStyle="pills" >
    <NavLink
      to="/search"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >Find</NavLink>
    <NavLink
      to="/saved"
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >Saved</NavLink>
    
  </Nav>
);

    export default NavTabs;