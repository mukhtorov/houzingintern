import React from 'react';
import Home from './Home';

import Filter from '../Filter';
import Recommended from './Recommended';
import { Container } from './style';

export const Generic = () => {
  return (
    <Container>
      <Filter />
      <Home />
      <Recommended />
    </Container>
  );
};

export default Generic;
