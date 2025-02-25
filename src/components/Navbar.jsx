import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import PianoIcon from '@mui/icons-material/Piano';
import BuildIcon from '@mui/icons-material/Build';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import HandymanIcon from '@mui/icons-material/Handyman';
import SecurityIcon from '@mui/icons-material/Security';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_ok3.png';
import './Navbar.css';

const NavigationBar = ({ isPianoChatOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const footer = document.getElementById('site-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setExpanded(false);
    }
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  const handleBackHomeClick = (e) => {
    e.preventDefault();
    const backButton = e.currentTarget;
    backButton.classList.add('sliding-down');
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  const renderMobileNav = () => (
    <div style={{ display: isPianoChatOpen && isMobile ? 'none' : 'block' }}>
      {!isHome && (
        <Link to="/" className="mobile-back-home" onClick={handleBackHomeClick}>
          <div className="back-home-content">
            <ArrowBackIcon className="back-icon" />
            <div className="back-text">
              <HomeIcon className="home-icon" />
              <span>Home</span>
            </div>
          </div>
        </Link>
      )}
      <div className="mobile-nav">
        <div className="mobile-nav-content d-flex justify-content-evenly">
          <Link to="/pianoforti" className="mobile-nav-item" onClick={handleNavClick}>
            <PianoIcon className="nav-icon" />
            <span className="nav-text">Pianoforti</span>
          </Link>
          <div 
            className={`mobile-nav-item ${expanded ? 'active' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            <BuildIcon className="nav-icon" />
            <span className="nav-text">Servizi</span>
          </div>
          <Link to="/biografia" className="mobile-nav-item" onClick={handleNavClick}>
            <GroupIcon className="nav-icon" />
            <span className="nav-text">Chi Siamo</span>
          </Link>

          <a href="#site-footer" className="mobile-nav-item" onClick={handleContactClick}>
            <EmailIcon className="nav-icon" />
            <span className="nav-text">Contatti</span>
          </a>
        </div>

        {expanded && (
          <div className="mobile-services-menu">
            <div className="mobile-services-header">
              <h5>Servizi</h5>
              <button className="close-button" onClick={() => setExpanded(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="mobile-services-content">
              <Link to="/accordatura" className="mobile-service-item" onClick={handleNavClick}>
                <TuneIcon className="service-icon" />
                <span>Accordatura</span>
              </Link>
              <Link to="/restauro" className="mobile-service-item" onClick={handleNavClick}>
                <HandymanIcon className="service-icon" />
                <span>Restauro</span>
              </Link>
              <a href="https://ilmiobrokerassicurativo.it/partners/restagno-pianoforti" className="mobile-service-item" onClick={handleNavClick} target="_blank" rel="noopener noreferrer">
                <SecurityIcon className="service-icon" />
                <span>Assicurazione DUAL</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderDesktopNav = () => (
    <Navbar 
      ref={navRef}
      expand="lg" 
      sticky="top" 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{ display: isPianoChatOpen && isMobile ? 'none' : 'block' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img
            src={logo}
            alt="Restagno Pianoforti Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-grid">
            <Nav.Link as={Link} className="nav-item" to="/pianoforti" onClick={handleNavClick}>
              <div className="nav-item-content">
                <PianoIcon className="nav-icon" />
                <span className="nav-text">Pianoforti</span>
              </div>
            </Nav.Link>
            <NavDropdown
              title={
                <div className="nav-item-content">
                  <BuildIcon className="nav-icon" />
                  <span className="nav-text">Servizi</span>
                </div>
              }
              id="basic-nav-dropdown"
              className="services-dropdown nav-item"
            >
              <NavDropdown.Item as={Link} to="/accordatura" onClick={handleNavClick}>
                <TuneIcon className="dropdown-icon" />
                <span>Accordatura</span>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/restauro" onClick={handleNavClick}>
                <HandymanIcon className="dropdown-icon" />
                <span>Restauro</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://ilmiobrokerassicurativo.it/partners/restagno-pianoforti" target="_blank" rel="noopener noreferrer">
                <SecurityIcon className="dropdown-icon" />
                <span>Assicurazione DUAL</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} className="nav-item" to="/biografia" onClick={handleNavClick}>
              <div className="nav-item-content">
                <GroupIcon className="nav-icon" />
                <span className="nav-text">Chi Siamo</span>
              </div>
            </Nav.Link>
            <Nav.Link className="nav-item" onClick={handleContactClick} href="#site-footer">
              <div className="nav-item-content">
                <EmailIcon className="nav-icon" />
                <span className="nav-text">Contatti</span>
              </div>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  return isMobile ? renderMobileNav() : renderDesktopNav();
};

export default NavigationBar;
