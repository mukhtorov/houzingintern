import React, { useRef } from 'react';
import { Popover } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Input } from '../Generic';
import { Container, Icon, Wrapper, Advanced, Section } from './style';
import useSearch from '../../hooks/useSearch';
import useReplace from '../../hooks/useReplace';

export const Generic = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const query = useSearch();

  const cuntryRef = useRef('');
  const regionRef = useRef('');
  const cityRef = useRef('');
  const zipRef = useRef('');
  const roomRef = useRef('');
  const addressRef = useRef('');
  const houseNameRef = useRef('');
  const minPriceRef = useRef('');
  const maxPriceRef = useRef('');

  // const searchQuery = [
  //   { key: 'country', value: cuntryRef },
  //   { key: 'city', value: cityRef },
  //   { key: 'min_price', value: minPriceRef },
  //   { key: 'max_price', value: maxPriceRef },
  //   { key: 'region', value: regionRef },
  //   { key: 'room', value: roomRef },
  //   { key: 'zip_code', value: zipRef },
  //   { key: 'address', value: addressRef },
  //   { key: 'house_name', value: houseNameRef },
  // ];

  const onSearch = () => {
    // console.log(searchQuery);
    // navigate()
  };

  const onChange = ({ target }) => {
    const { value } = target;
    navigate(`${pathname}${useReplace('city', value)}`);
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input ref={cuntryRef} mr={20} placeholder='Country' />
        <Input ref={regionRef} mr={20} placeholder='Region' />
        <Input
          defaultValue={query.get('city')}
          ref={cityRef}
          mr={20}
          onChange={onChange}
          placeholder='City'
        />
        <Input ref={zipRef} mr={20} placeholder='Zip Code' />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input ref={addressRef} mr={20} placeholder='Adress' />
        <Input ref={houseNameRef} mr={20} placeholder='House Name' />
        <Input ref={roomRef} mr={20} placeholder='Rooms' />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input ref={minPriceRef} mr={20} placeholder='Min price' />
        <Input ref={maxPriceRef} mr={20} placeholder='Max price' />
      </Section>
      <Section>
        {/* <Button width='131px' ml={20} type='secondary'>
          Cancel
        </Button> */}
        <Button width='131px' ml={20} type='primary' onClick={onSearch}>
          Search
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <Container>
      <Wrapper>
        <Input
          pl='42px'
          placeholder='Enter an address, neighborhood, city, or ZIP code'
        >
          <Icon.Home />
        </Input>
        <Popover
          placement='bottomRight'
          content={advancedSearch}
          trigger='click'
        >
          <Button width='131px' ml={20} type='secondary'>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width='131px' ml={20} type='primary' onClick={onSearch}>
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Generic;
