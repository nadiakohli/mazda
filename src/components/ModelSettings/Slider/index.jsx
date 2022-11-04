/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';

// Styles
import {
  ImageWrap,
  Image,
  Wrapper,
} from './styled';

const ModelSlider = ({ images }) => {
  const settings = {
    centerMode: false,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          {images
            ? images.map((item) => (
              <ImageWrap key={item}>
                <Image src={`${item}`} />
              </ImageWrap>
            ))
            : ''}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default ModelSlider;
