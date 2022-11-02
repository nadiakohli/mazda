import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 0 135px;
  display: flex;
  flex-direction: column;
  height: 140px;
  background-color: ${({ theme: { colors: { mirage } } }) => mirage};
  color: ${({ theme: { colors: { monsoon } } }) => monsoon};
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};

  & svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    & path {
      fill: ${({ theme: { colors: { monsoon } } }) => monsoon};
      opacity: 0.8;
    }
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  border-bottom: 1px solid ${({ theme: { colors: { monsoon } } }) => monsoon};
  margin-top: 15px;

  &:last-child {
    border-bottom: none;
  }
`;

export const BlocksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  width: 28%;
`;

export const SpanWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const Span = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;

export const BlockWrap = styled.div`
  display: flex;
  align-items: center;
`;
