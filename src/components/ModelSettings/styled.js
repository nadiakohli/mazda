import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  
  & img {
    max-height: 100%;
    max-width: 100%;
  }
`;
