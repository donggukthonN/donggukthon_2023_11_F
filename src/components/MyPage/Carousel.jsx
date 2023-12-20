import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from 'react';
import CustomStamp from './CustomStamp';
import styled from 'styled-components';
import { CarouselContainer } from './styled';

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState();
  const [components, setComponents] = useState([]);
  const handleChange = (index) => {
    setCurrentIndex(index);
  }
  const ImageArray = () => {
    let images = [];
    for(let i=0; i<10; i++){
      images.push(<CustomStamp/>);
    };
    console.log(images);
    setComponents(images);
  };
  return(
    <CarouselContainer>
      <Carousel
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <CustomPrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} hasNext={true} label="Prev" />
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <CustomNextArrow onClickHandler={onClickHandler} hasPrev={true} hasNext={hasNext} label="Next" />
        )}
        onChange={handleChange}
        selectedItem={ImageArray[currentIndex]}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        >
          {Array(10).fill().map((item,index) => (
            <div key={index} style={{display: 'flex', justifyContent: 'center'}}>
              <CustomStamp/>
            </div>
          ))}
        </Carousel>
    </CarouselContainer>
  );
};

export default CustomCarousel;

const CustomArrowsContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CustomArrow = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #992D2D;
  top: 50%;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #2D9985;
  }
`;

const CustomPrevArrow = ({ onClickHandler, hasPrev }) => {
  if (!hasPrev) return null;
  return (
    <CustomArrowsContainer style={{ left: '0' }}>
      <CustomArrow onClick={onClickHandler} className="arrow-prev">
        &lt;
      </CustomArrow>
    </CustomArrowsContainer>
  );
};

const CustomNextArrow = ({ onClickHandler, hasNext, label }) => {
  if (!hasNext) return null;
  return (
    <CustomArrowsContainer style={{ right: '0' }}>
      <CustomArrow onClick={onClickHandler} className="arrow-next">
        &gt;
      </CustomArrow>
    </CustomArrowsContainer>
  );
};