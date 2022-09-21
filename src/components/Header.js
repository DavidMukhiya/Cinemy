import React from "react";
//import { Navbar } from "./Navbar";
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem  } from "reactstrap";
import { NavLink } from "react-router-dom";
import cinemylogo from '../img/cinemy-logo.jpg'

const Header = () => {
  return (
    <Navbar dark sticky="top" color="dark" expand="md" >
      <NavbarBrand href="/" >
        <img src={cinemylogo} alt="cinemy logo" width='70' />
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/movies'>
              Movie
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/tvseries'>
              TvSeries
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/admin'>
              admin
            </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
