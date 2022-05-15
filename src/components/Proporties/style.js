import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  width: var(--width);
  margin-top: 70px;
  margin-bottom: 15px;
  font-size: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  width: var(--width);
  justify-content: space-between;
  flex-wrap: wrap;
`;

export { Container, Wrapper, Title };
