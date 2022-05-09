import React from 'react';
import { Button, Input } from '../Generic';
import { Container, Icon, Wrapper } from './style';

export const Generic = () => {
  return (
    <Container>
      <Wrapper>
        <Input
          pl='42px'
          placeholder='Enter an address, neighborhood, city, or ZIP code'
        >
          <Icon.Home />
        </Input>
        <Button width='131px' ml={20} type='secondary'>
          <Icon.Key /> Status
        </Button>
        <Button width='131px' ml={20} type='secondary'>
          <Icon.Price /> Price
        </Button>
        <Button width='131px' ml={20} type='secondary'>
          <Icon.Setting /> Advanced
        </Button>
        <Button width='131px' ml={20} type='primary'>
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Generic;
