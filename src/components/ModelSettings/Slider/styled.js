import styled from 'styled-components';

export const Wrap = styled.div`
  width: 45vw;
  height: 500px;
  position: relative;
  background: linear-gradient(to bottom, #D5D5D5 49%, #D5D5D5 1%, white 1%, white 50%);

  & img {
    width: 100%;
    position: absolute;
    bottom: 150px;
    right: 0;
  }
`;
