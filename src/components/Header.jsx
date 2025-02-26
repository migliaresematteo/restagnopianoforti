import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import NavigationBar from './Navbar';
import './Header.css';

const Header = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <>
      <motion.div 
        className="header-wrapper" 
        style={{ backgroundImage: `url('/images/bgh.jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="header-overlay">
          <Container className="header-content">
            <Row className="text-center mx-0">
              <Col>
                <motion.h1 
                  className="header-title"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {title}
                </motion.h1>
                <motion.p 
                  className="header-subtitle"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {subtitle}
                </motion.p>
                <motion.button 
                  className="modern-cta-button"
                  onClick={onCtaClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {ctaText}
                </motion.button>
              </Col>
            </Row>
          </Container>
          <motion.div 
            className="scroll-indicator"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;