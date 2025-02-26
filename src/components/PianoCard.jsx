import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarMonth, 
  Straighten, 
  Palette, 
  SecurityOutlined,
  InfoOutlined 
} from '@mui/icons-material';
import './PianoCard.css';

const PianoCard = ({ piano }) => {
  // Ensure price is correctly formatted for parsing
  const parsedPrice = typeof piano.price === 'string' 
    ? parseFloat(piano.price.replace(/\./g, '').replace(',', '.'))
    : piano.price;

  return (
    <Link to={`/pianoforti/${piano.id}`} className="text-decoration-none">
      <motion.div 
        className="modern-piano-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-image-container">
          <motion.img 
            src={piano.image} 
            alt={piano.name}
            className="card-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {parsedPrice > 2000 && (
            <motion.div 
              className="insurance-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SecurityOutlined className="me-1" fontSize="small" />
              <span>Assicurazione inclusa</span>
            </motion.div>
          )}

          <motion.div 
            className="color-dot"
            style={{ backgroundColor: piano.colorCode }}
            whileHover={{ scale: 1.2 }}
            title={piano.color}
          />

          <div className="card-overlay">
            <motion.button 
              className="info-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <InfoOutlined /> Dettagli
            </motion.button>
          </div>
        </div>

        <div className="card-content">
          <h3 className="piano-title">{piano.name}</h3>
          
          <div className="piano-tags">
            <span className="tag tag-type">{piano.type}</span>
            <span className="tag tag-condition">{piano.condition}</span>
          </div>

          <div className="piano-specs">
            <div className="spec-item">
              <Palette className="spec-icon" />
              <span>{piano.color}</span>
            </div>
            <div className="spec-item">
              <CalendarMonth className="spec-icon" />
              <span>{piano.year}</span>
            </div>
            {piano.type.toLowerCase() === 'verticale' && piano.height && (
              <div className="spec-item">
                <Straighten className="spec-icon" />
                <span>H: {piano.height}</span>
              </div>
            )}
            {piano.type.toLowerCase() === 'coda' && piano.length && (
              <div className="spec-item">
                <Straighten className="spec-icon" />
                <span>L: {piano.length}</span>
              </div>
            )}
          </div>

          <div className="piano-description">
            {piano.description}
          </div>

          <div className="card-footer">
            <div className="price">
              {typeof piano.price === 'number' 
                ? `€${piano.price.toLocaleString()}` 
                : "€" + piano.price}
            </div>
            <motion.button 
            
              className="contact-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Maggiori Informazioni
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PianoCard;
