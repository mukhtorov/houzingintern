import React from 'react';
import { Container } from './style';

export const Button = ({ children, onClick, height, width, type }) => {
  return (
    <Container type={type} width={width} height={height} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
