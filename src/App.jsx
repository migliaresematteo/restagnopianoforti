import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Storia from './pages/Storia';
import Pianoforti from './pages/Pianoforti';
import Biography from './pages/Biography';
import Map from './components/Map';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import PianoDetails from './pages/PianoDetails';
import NavigationBar from './components/Navbar';
import Restauro from './pages/Restauro';
import PianoChat from './components/PianoChat/PianoChat';
import AppointmentBanner from './components/AppointmentBanner/AppointmentBanner';
import Accordatura from './pages/Accordatura';

function App() {
  const [isPianoChatOpen, setIsPianoChatOpen] = useState(false);

  const handlePianoChatStateChange = (isOpen) => {
    setIsPianoChatOpen(isOpen);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar isPianoChatOpen={isPianoChatOpen} />
        <ScrollToTop />
        <AppointmentBanner />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
              </>
            } />
            <Route path="/storia" element={<Storia />} />
            <Route path="/pianoforti" element={<Pianoforti />} />
            <Route path="/pianoforti/:id" element={<PianoDetails />} />
            <Route path="/biografia" element={
              <>
                <Biography />
              </>
              } />
            <Route path="/restauro" element={<Restauro />} />
            <Route path="/accordatura" element={
              <>
                <Accordatura />
              </>
              } />
          </Routes>
        </main>
        <Map />
        <Reviews />
        <Footer />
        <PianoChat onStateChange={handlePianoChatStateChange} />
      </div>
    </Router>
  );
}

export default App;
