import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import BrandLogos from './components/BrandLogos';
import FeaturedPianos from './components/FeaturedPianos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <About />
        <BrandLogos />
        <FeaturedPianos />
      </div>
    </Router>
  );
}

export default App;
