import React from 'react';
import styled from 'styled-components';

// Styles
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme: { colors: { white } } }) => white};
`;

const StyledSpinner = styled.div`
  height: 150px;
  width: 150px;
  border: 16px solid ${({ theme: { colors: { whiteSmoke } } }) => whiteSmoke};
  border-top: 16px solid ${({ theme: { colors: { mirage } } }) => mirage};
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @media (max-width: 650px) {
    border: 12px solid ${({ theme: { colors: { whiteSmoke } } }) => whiteSmoke};
    border-top: 12px solid ${({ theme: { colors: { mirage } } }) => mirage};
    width: 75px;
    height: 75px;
    left: 43%;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <Wrap>
    <StyledSpinner />
  </Wrap>
);

export default Loader;
