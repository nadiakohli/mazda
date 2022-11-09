import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 700px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 50px 25px;

  @media screen and (max-width: 1100px) {
    width: 85vw;
  }

  @media screen and (max-width: 768px) {
    width: 95vw;
  }

  @media screen and (max-width: 480px) {
    width: 98vw;
    height: 1000px;
  }
`;

export const BlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  border-top: ${({ borderTop }) => borderTop ? '1px solid #D5D5D5' : ''};

  & h3 {
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-size: 36px;
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
    font-weight: 500;

    @media screen and (max-width: 480px) {
      font-size: 26px;
    }

    @media screen and (max-width: 320px) {
      font-size: 24px;
    }

    &:last-child {
      margin-top: 10px;
    }
  }
`;

export const ContentWrap = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }

  & div {
    width: 75px;
    height: 75px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      width: 100px;
      height: 100px;
      margin: 5px;
    }
  }

  .active {
    border: 8px solid ${({ theme: { colors: { white } } }) => white};
    border-radius: 5px;
  }

  & img {
    width: 100%;
    height: 100%;
    
    &:hover {
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
  }
`;
