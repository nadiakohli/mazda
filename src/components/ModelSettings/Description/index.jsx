/* eslint-disable react/prop-types */
import React from 'react';

// Styles
import { LinkBtn } from 'components/common/AnotherCard/styled';
import { Wrap, Test } from './styled';

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
        <span>Price:</span>
        {' '}
        {data?.price}
      </p>
      <p>
        <span>Total price:</span>
        {' '}
        {data?.price}
      </p>
    </div>
    <Test>
      <p>
        The Mazda6 offers quality and refinement taken to an even higher level. Stand out on the road with the
        ultimate thoughtful, elegant and sophisticated exterior design. New technologies ensure the perfect operation
        of SKYACTIV power units, and driving dynamics have been improved thanks to increased body rigidity, control and
        braking systems, higher aerodynamic efficiency and reduced noise and vibration.
      </p>
    </Test>
  </Wrap>
);

export default Description;
