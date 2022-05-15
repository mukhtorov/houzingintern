import React from 'react';
import noimg from '../../assets/imgs/noimg.jpg';
import nouser from '../../assets/imgs/nouser.jpg';
import {
  Container,
  Image,
  InfoWrapper,
  Info,
  Icons,
  Price,
  User,
} from './style';

export const Generic = ({ info }) => {
  return (
    <Container>
      <Image src={info?.img || noimg} alt='house image' />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user || nouser} />
        </User>

        <Info.Title>New Aparment Nice View</Info.Title>
        <Info.Text>Quincy, St, Brookly NY, USA</Info.Text>
        <Info.Detailes>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.bed || 0} Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bath />
            <Info.Text>{info?.bath || 0} Baths</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Garage />
            <Info.Text>{info?.garage || 0} Garage</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Ruler />
            <Info.Text>{info?.square || 0} Sq Ft</Info.Text>
          </Icons.Wrapper>
        </Info.Detailes>
      </InfoWrapper>
      <Price>
        <Price.Wrapper>
          <Price.Sale>2500$ / month</Price.Sale>
          <Price.Origin>2000$ / month</Price.Origin>
        </Price.Wrapper>
        <Price.IconWrapper>
          <Icons.Resize />
          <Icons.Love />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};

export default Generic;
