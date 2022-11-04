import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { LinkBtn } from 'components/common/AnotherCard/styled';
import { Wrap, ParagraphWrap } from './styled';

const Description = ({ data }) => (
  <Wrap>
    <div>
      <h2>{data?.title}</h2>
      <LinkBtn size="small">{data?.fuel}</LinkBtn>
      <p>
        <span>Color:</span>
        {' '}
        {data?.color}
      </p>
      <p>
        <span>Salon:</span>
        {' '}
        {data?.salon}
      </p>
      <p>
        <span>Engine:</span>
        {' '}
        {data?.engine}
      </p>
      <p>
        <span>Alloy wheel:</span>
        {' '}
        {data?.alloyWheel}
      </p>
      <p>
        <span>Price:</span>
        {' '}
        {data?.price}
        {' '}
        $
      </p>
      <p>
        <span>Total price:</span>
        {' '}
        {data?.price}
        {' '}
        $
      </p>
    </div>
    <ParagraphWrap>
      <p>
        {data?.description}
      </p>
    </ParagraphWrap>
  </Wrap>
);

Description.propTypes = {
  data: {
    title: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    salon: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    alloyWheel: PropTypes.string.isRequired,
  }.isRequired,
};

export default Description;
