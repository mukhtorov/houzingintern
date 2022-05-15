import styled from 'styled-components';
import { ReactComponent as logoIcon } from '../../assets/icons/logo.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarWrapper = styled.div`
  display: flex;
  height: 64px;
  max-width: 1440px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)``;
Logo.Title = styled('div')`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;

const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#00fff5' : 'white',
    textDecoration: 'none',
    margin: '0 32px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
  };
};

export { Container, Wrapper, NavbarWrapper, Logo, NavbarBody, activeStyle };
