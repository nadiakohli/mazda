import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

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

ModelSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelSlider;
