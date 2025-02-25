import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getPianoById, getRandomFeaturedPianos } from '../data/pianos';
import FeaturedPianos from '../components/FeaturedPianos';
import ImageGallery from '../components/common/ImageGallery';
import PianoDetailsCard from '../components/common/PianoDetailsCard';
import DescriptionBox from '../components/common/DescriptionBox';
import '../components/common/styles.css';

export default function PianoDetails() {
  const { id } = useParams();
  const [piano, setPiano] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [featuredPianos, setFeaturedPianos] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const pianoData = getPianoById(id);
    if (pianoData) {
      setPiano(pianoData);
      setMainImage(pianoData.images[0]);
      setCurrentImageIndex(0);
      setFeaturedPianos(getRandomFeaturedPianos(3, pianoData.id));
    }
  }, [id]);

  const handlePrevImage = () => {
    if (piano) {
      const newIndex = (currentImageIndex - 1 + piano.images.length) % piano.images.length;
      setCurrentImageIndex(newIndex);
      setMainImage(piano.images[newIndex]);
    }
  };

  const handleNextImage = () => {
    if (piano) {
      const newIndex = (currentImageIndex + 1) % piano.images.length;
      setCurrentImageIndex(newIndex);
      setMainImage(piano.images[newIndex]);
    }
  };

  if (!piano) {
    return <div className="container py-5">Caricamento...</div>;
  }

  const infoBoxes = [
    {
      icon: 'bi-palette',
      label: 'Colore',
      value: piano.color,
      colorIndicator: piano.colorCode
    },
    {
      icon: 'bi-calendar3',
      label: 'Anno',
      value: piano.productionDate
    },
    {
      icon: 'bi-rulers',
      label: 'Dimensioni',
      value: piano.type.toLowerCase() === 'verticale' 
        ? `H: ${piano.dimensions.height}` 
        : `L: ${piano.dimensions.length}`
    },
    {
      icon: 'bi-shield',
      label: 'Assicurazione',
      value: parseFloat(piano.price.replace('.', '')) >= 2000 ? 'Inclusa' : 'Non inclusa',
      valueClassName: parseFloat(piano.price.replace('.', '')) >= 2000 ? 'text-success' : 'text-secondary',
      valueIcon: parseFloat(piano.price.replace('.', '')) >= 2000 ? 'bi-check-circle-fill' : 'bi-x-circle-fill'
    }
  ];

  return (
    <Container>
      <Row className="pt-5 pt-md-0 g-4 min-vh-100 justify-content-center">
        {/* Mobile Layout */}
        <Col className="d-block d-lg-none col-12">
          <Row className="g-4">
            <Col className="col-12">
              <ImageGallery
                image={mainImage}
                alt={piano.model}
                onPrevious={handlePrevImage}
                onNext={handleNextImage}
                showNavigation={piano.images.length > 1}
                isMobile={true}
              />
            </Col>

            <Col className="col-12">
              <PianoDetailsCard piano={piano} infoBoxes={infoBoxes} />
            </Col>

            <Col className="col-12">
              <DescriptionBox description={piano.description} />
            </Col>
          </Row>
        </Col>

        {/* Desktop Layout */}
        <Col className="d-none d-lg-block">
          <Row className="g-3">
            <Col className="col-12">
              <ImageGallery
                image={mainImage}
                alt={piano.model}
                onPrevious={handlePrevImage}
                onNext={handleNextImage}
                showNavigation={piano.images.length > 1}
                isMobile={false}
              />
            </Col>

            <Col className="col-12">
              <PianoDetailsCard piano={piano} infoBoxes={infoBoxes} />
            </Col>

            <Col className="col-12">
              <DescriptionBox description={piano.description} />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="my-5 py-4">
        <div className="text-center mb-4">
          <h2 className="h3 mb-3">Altri pianoforti in evidenza</h2>
          <div className="elegant-hr mb-4">
            <div className="hr-line"></div>
            <div className="hr-icon">♪</div>
            <div className="hr-line"></div>
          </div>
        </div>
        <FeaturedPianos pianos={featuredPianos} />
      </div>
    </Container>
  );
}
