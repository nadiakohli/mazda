import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled(Slider)`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  cursor: grabbing;
  padding: 10px 20px 0 20px;
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
`;

export const ImageWrap = styled.div`
  background: linear-gradient(to bottom, #D5D5D5 49%, #D5D5D5 1%, white 1%, white 50%);
  width: 45vw;
  height: 500px;
  position: relative;

  & img {
    width: 100%;
    position: absolute;
    bottom: 150px;
    right: 0;
  }
`;

export const Image = styled.img`
  max-height: 580px;
  max-width: 99%;
  margin: auto;
`;
