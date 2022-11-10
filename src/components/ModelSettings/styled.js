import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 1100px) {
    margin-top: 25px;
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  @media screen and (max-width: 480px) {
    width: 98%;
  }
`;
