import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExampleContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }
`;

const SliderContainer = styled.div`
  flex: 1;
  min-width: 0; // Prevents slider from overflowing
  
  .slick-dots {
    bottom: 10px;
    
    li button:before {
      color: white;
    }
    
    li.slick-active button:before {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    
    .slick-dots {
      bottom: 5px;
    }
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Title = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 4/3;
  position: relative;
  
  @media (max-width: 768px) {
    aspect-ratio: 3/2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const RestorationExample = ({ title, description, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  const sliderSection = (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} alt={`${title} - Image ${index + 1}`} />
          </ImageContainer>
        ))}
      </Slider>
    </SliderContainer>
  );

  const contentSection = (
    <ContentContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContentContainer>
  );

  return (
    <ExampleContainer>
      {sliderSection}
      {contentSection}
    </ExampleContainer>
  );
};

export default RestorationExample;
