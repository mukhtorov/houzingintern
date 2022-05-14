import React, { useRef } from 'react';
import Filter from '../Filter';
import { CarouselWrapper, Container, Icon, Img, MainCarousel } from './style';
import img1 from '../../assets/imgs/uy1.png';
import img2 from '../../assets/imgs/uy2.png';

export const Home = () => {
  const slider = useRef();

  return (
    <Container>
      <Filter />
      <CarouselWrapper ref={slider}>
        <Icon.Left onClick={() => slider.current?.next()} />
        <Icon.Right />
        <MainCarousel dots>
          <Img src={img1} alt='img' />
          <Img src={img2} alt='img' />
          <Img src={img1} alt='img' />
          <Img src={img2} alt='img' />
          <Img src={img1} alt='img' />
          <Img src={img2} alt='img' />
        </MainCarousel>
      </CarouselWrapper>
    </Container>
  );
};

export default Home;
