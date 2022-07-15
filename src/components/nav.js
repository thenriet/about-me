import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../assets/navbar.css';
import logo from '../assets/logo.svg';
import '../assets/App.css';


class nav extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
  super(props);
  this.state = { clicked: false }; // defines initial state
  }

  render() {
    return (
      <>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container className="">
            <Nav className="">
            <Navbar.Brand className=' ms-4' href="#about-me">Qui suis-je ?</Navbar.Brand>
              <Nav.Link className=' ms-4' href="#home">
                <img src={logo} className="App-logo" alt="logo" style={{height:"30px", width:"30px",}}></img>
              </Nav.Link>
              <Nav.Link className=' ms-4' href="#skills">Compétences</Nav.Link>
              <Nav.Link className=' ms-4' href="#services">Services</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default nav;
