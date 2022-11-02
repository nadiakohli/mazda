import styled from 'styled-components';
import mazdaSalon from 'assets/images/mazdaSalon.jpg';

export const Wrap = styled.div`
  background-image: url(${mazdaSalon});
  height: 100vh;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  padding: 0 135px;
  position: relative;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  position: absolute;
  top: 30%;
  right: 15%;

  & h2, span, p {
    color: ${({ theme: { colors: { monsoon } } }) => monsoon};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h2, span {
    margin-bottom: 15px;
    font-weight: 600;
    text-transform: uppercase;
  }

  & h2 {
    font-size: 36px;
  }

  & span {
    font-size: 24px;
  }

  & p {
    line-height: 1.7;
    width: 65%;
    font-size: 14px;
    font-weight: 400;
  }
`;
