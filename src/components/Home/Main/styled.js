import styled from 'styled-components';

// Images
import bg from 'assets/images/bg.jpg';

export const Wrap = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0 135px;

  & span {
    font-size: 48px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme: { colors: { monsoon } } }) => monsoon};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }
`;

export const ContentWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  opacity: 0.9;
  text-transform: uppercase;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  font-weight: 400;
`;
