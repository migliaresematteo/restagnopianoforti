import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { pianos as pianosData } from '../data/pianos';
import PianoCard from '../components/PianoCard';
import PageHeader from '../components/common/PageHeader';
import FilterCard from '../components/common/FilterCard';
import FilterSelect from '../components/common/FilterSelect';
import PriceRangeFilter from '../components/common/PriceRangeFilter';
import '../components/common/styles.css';

const getBrand = (model) => {
  if (model.startsWith('Carl Hardt')) return 'Carl Hardt Stuttgart';
  if (model.startsWith('Pianoforte ')) return model.split(' ')[1];
  return model.split(' ')[0];
};

const brands = [...new Set(pianosData.map(piano => getBrand(piano.model)))];
brands.unshift("Tutti");

const types = ["Tutti", "Coda", "Verticale"];
const conditions = ["Tutti", "Nuovo", "Usato", "Restaurato"];

const Pianoforti = () => {
  const [filters, setFilters] = useState({
    brand: "Tutti",
    type: "Tutti",
    condition: "Tutti",
    priceRange: [0, 200000]
  });

  const filteredPianos = pianosData.filter(piano => {
    const brand = getBrand(piano.model);
    const price = typeof piano.price === 'number' 
      ? piano.price 
      : parseFloat(piano.price.replace(/\./g, '').replace(',', '.'));
    
    return (
      (filters.brand === "Tutti" || brand === filters.brand) &&
      (filters.type === "Tutti" || piano.type === filters.type) &&
      (filters.condition === "Tutti" || piano.condition === filters.condition) &&
      (price >= filters.priceRange[0] && price <= filters.priceRange[1])
    );
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const adaptPianoData = (piano) => ({
    ...piano,
    name: piano.model,
    image: piano.images[0],
    year: piano.productionDate,
    length: piano.dimensions.length,
    height: piano.dimensions.height,
  });

  return (
    <Container className="py-5">
      <PageHeader title="I Nostri Pianoforti" />
      
      <FilterCard 
        title="Filtra Pianoforti" 
        icon="funnel" 
        resultCount={filteredPianos.length}
      >
        <Row className="g-4">
          <FilterSelect
            label="Marca"
            icon="building"
            value={filters.brand}
            onChange={(value) => handleFilterChange('brand', value)}
            options={brands}
          />
          <FilterSelect
            label="Tipo"
            icon="music-note"
            value={filters.type}
            onChange={(value) => handleFilterChange('type', value)}
            options={types}
          />
          <FilterSelect
            label="Condizione"
            icon="stars"
            value={filters.condition}
            onChange={(value) => handleFilterChange('condition', value)}
            options={conditions}
          />
          <PriceRangeFilter
            value={filters.priceRange}
            onChange={(value) => handleFilterChange('priceRange', value)}
          />
        </Row>
      </FilterCard>

      <Row className="g-4">
        {filteredPianos.map(piano => (
          <Col key={piano.id} md={4}>
            <PianoCard piano={adaptPianoData(piano)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pianoforti;
