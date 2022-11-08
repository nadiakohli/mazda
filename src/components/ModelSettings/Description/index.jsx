import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { LinkBtn } from 'components/common/AnotherCard/styled';
import { Wrap, ParagraphWrap } from './styled';

const Description = ({ data, totalPrice }) => (
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
        {data?.wheel}
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
        {totalPrice}
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
  data: PropTypes.shape({
    title: PropTypes.string,
    fuel: PropTypes.string,
    color: PropTypes.string,
    salon: PropTypes.string,
    engine: PropTypes.string,
    price: PropTypes.number,
    wheel: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Description;
