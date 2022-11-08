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
            ? images?.map((img) => (
              <ImageWrap key={img}>
                <Image src={`${img}`} />
              </ImageWrap>
            ))
            : ''}
        </Slider>
      </div>
    </Wrapper>
  );
};

ModelSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ModelSlider.defaultProps = {
  images: [],
};

export default ModelSlider;
