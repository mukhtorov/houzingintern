import styled from 'styled-components';

const getType = (type) => {
  switch (type) {
    case 'primary':
      return {};
    default:
      return {
        border: '1px solid #e6e9ec',
      };
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || '44px'};
  width: ${({ width }) => width || '100%'};
  border: ${({ border }) => border || '1px solid #e6e9ec'};
  border-radius: 2px;
  cursor: pointer;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */

  :active {
    transform: scale(0.98);
  }
`;

export { Container };