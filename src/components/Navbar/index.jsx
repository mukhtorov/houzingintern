import React from 'react';
import {
  Body,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
  activeStyle,
} from './style';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import Button from '../Generic/Button';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                <NavLink style={activeStyle} key={value.id} to={value.path}>
                  {value.title}
                </NavLink>
              );
            })}
          </NavbarBody>
          <Logo>
            <Button width={'120px'}>Signin</Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Body>
        hey
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
