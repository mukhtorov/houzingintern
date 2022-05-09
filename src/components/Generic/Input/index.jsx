import React from 'react';
import { Container, Icon, Wrapper } from './style';

export const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Icon>{children}</Icon>
      <Container
        onChange={onChange}
        placeholder={placeholder}
        mr={mr}
        ml={ml}
        pl={pl}
        mb={mb}
        mt={mt}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default Input;
