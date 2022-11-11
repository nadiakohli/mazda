import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 0 135px;
  display: flex;
  flex-direction: column;
  height: 150px;
  background-color: ${({ theme: { colors: { mirage } } }) => mirage};
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

  @media screen and (max-width: 1280px) {
    padding: 0 25px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 15px;
  }

  @media screen and (max-width: 480px) {
    height: 165px;
    padding: 0 15px;
  }

  & svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
    
    & path {
      fill: ${({ theme: { colors: { monsoon } } }) => monsoon};
      opacity: 0.8;
    }

    & path:hover {
      fill: ${({ theme: { colors: { white } } }) => white};
      opacity: 1;
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection ? 'column' : 'row'};
  justify-content: space-between;
  opacity: 0.8;
  border-bottom: 1px solid ${({ theme: { colors: { monsoon } } }) => monsoon};
  margin-top: 15px;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
  }

  @media screen and (max-width: 320px) {
    align-items: flex-start;
  }
`;

export const BlocksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  width: 35%;

  @media screen and (max-width: 1280px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    width: 65%;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 15px 0;
  }
`;

export const SpanWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-bottom: 15px;

  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  
`;

export const Span = styled.span`
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
    text-align: center;
  }

  &:hover {
    color: ${({ theme: { colors: { white } } }) => white};
    opacity: 1;
  }
`;

export const BlockWrap = styled.div`
  display: flex;
  align-items: center;

  .active {
    text-shadow: 1px 1px 2px white;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const LangWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  opacity: 0.8;
  padding: 0 5px;
  border-left: ${({ borderLeft }) => borderLeft ? '2px solid white' : null};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
    text-align: center;
  }


  &:hover {
    color: ${({ theme: { colors: { white } } }) => white};
    opacity: 1;
  }
`;
