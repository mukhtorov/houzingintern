/* eslint-disable react/jsx-key */
import React, { useRef } from 'react';
import HouseCard from '../../HouseCard';
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel';

export const Generic = () => {
  const items = [
    <HouseCard />,
    <HouseCard />,
    <HouseCard />,
    <HouseCard />,
    <HouseCard />,
    <HouseCard />,
    <HouseCard />,
  ];

  const slider = useRef();
  return (
    <Container className='nocopy'>
      <div className='title center'>Recommended</div>
      <div className='description center'>
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={items}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Generic;
