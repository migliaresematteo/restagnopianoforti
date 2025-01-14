import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo_ok3.png';
import './Navbar.css';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="nav-link text-dark d-flex align-items-center"
    >
      {children}
      <FontAwesomeIcon 
        icon={faChevronDown} 
        className="ms-2 dropdown-icon"
      />
    </a>
  ));

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Restagno Pianoforti Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-dark" href="#home">Home</Nav.Link>
            <Nav.Link className="text-dark" href="#pianoforti">Pianoforti</Nav.Link>
            <NavDropdown 
              title={
                <span className="d-flex align-items-center">
                  Servizi
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="ms-2 dropdown-icon"
                  />
                </span>
              } 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#accordatura">Accordatura</NavDropdown.Item>
              <NavDropdown.Item href="#restauro">Restauro</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-dark" href="#chi-siamo">Chi Siamo</Nav.Link>
            <Nav.Link className="text-dark" href="#contatti">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
