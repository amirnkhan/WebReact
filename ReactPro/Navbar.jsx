import React from "react";
import "./index.css"

import {Carousel,NavDropdown,Navbar,Form,Nav,FormControl,Button} from "react-bootstrap";
export default function Navbar1() {
    return(
       <>
        <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home">Amir Nawaz Khan</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
      
      <Nav.Link href="Prices">Prices</Nav.Link>
      <Nav.Link href="Service">Service</Nav.Link>
      
      <Nav.Link href="Contact">Contact</Nav.Link>
      
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

       </>
    );
};

