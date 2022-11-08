import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  width: 100%;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  cursor: grabbing;
  .slick-track {
    display: flex;
    align-items: center;
  }
  & ul {
    position: absolute;
    z-index: 999;
    bottom: 2px;
    @media screen and (max-width: 600px) {
      bottom: 0;
    }
    li.slick-active button:before {
      color: ${({ theme: { colors: { mirage } } }) => mirage}
    }
  }
  .slick-dots li button:before {
    @media screen and (max-width: 768px) {
      font-size: 5px;
    }
  }
  @media screen and (max-width: 320px) {
    padding: 10px;
  }

  & div {
    background-color: ${({ theme: { colors: { whiteSmoke } } }) => whiteSmoke};
  }
`;

export const Image = styled.img`
  max-height: 580px;
  max-width: 99%;
  margin: auto;
`;
