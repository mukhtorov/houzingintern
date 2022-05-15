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

export const HouseCard = ({ info, mr, ml, margin }) => {
  return (
    <Container mr={mr} ml={ml} margin={margin}>
      <Image src={info?.attachments[0]?.imgPath || noimg} alt='house image' />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user || nouser} />
        </User>

        <Info.Title>{info?.description || 'description'}</Info.Title>
        <Info.Text>
          {info?.name || 'house'}, {info?.address || 'Address'},{' '}
          {info?.city || 'City'} {info?.country || 'Country'}
        </Info.Text>
        <Info.Detailes>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetails?.beds || 0} Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bath />
            <Info.Text>{info?.houseDetails?.bath || 0} Baths</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Garage />
            <Info.Text>{info?.houseDetails?.garage || 0} Garage</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Ruler />
            <Info.Text>{info?.houseDetails?.area || 0} Sq Ft</Info.Text>
          </Icons.Wrapper>
        </Info.Detailes>
      </InfoWrapper>
      <Price>
        <Price.Wrapper>
          <Price.Sale>{info?.salePrice || 0} / month</Price.Sale>
          <Price.Origin>{info?.price || 0} / month</Price.Origin>
        </Price.Wrapper>
        <Price.IconWrapper>
          <Icons.Resize />
          <Icons.Love />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};

export default HouseCard;
