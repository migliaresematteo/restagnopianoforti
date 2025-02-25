import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ShowcaseContainer = styled.div`
  margin: 40px 0;
  padding: 20px 0;
`;

const SlideContainer = styled.div`
  padding: 0 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 40px;

  h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  p {
    color: #34495e;
    line-height: 1.6;
    margin-bottom: 0;
  }
`;

const RestaurationShowcase = ({ examples }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <ShowcaseContainer>
      <Slider {...settings}>
        {examples.map((example, index) => (
          <SlideContainer key={index}>
            <ImageContainer>
              <Image src={example.image} alt={example.title} />
            </ImageContainer>
            <Description>
              <h3>{example.title}</h3>
              <p>{example.description}</p>
            </Description>
          </SlideContainer>
        ))}
      </Slider>
    </ShowcaseContainer>
  );
};

export default RestaurationShowcase;
