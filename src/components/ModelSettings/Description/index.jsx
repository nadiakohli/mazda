import React from 'react';
import { useParams } from 'react-router-dom';

import { cars2 } from 'config/config';

// Styles
import { LinkBtn } from 'components/common/AnotherCard/styled';
import { Wrap } from './styled';

const Description = () => {
  const { id } = useParams();
  const obj = cars2.find((item) => {
    if (item.id === parseInt(id, 10)) {
      return item;
    }
    return item;
  });
  return (
    <Wrap>
      <div>
        <h2>{obj.title}</h2>
        <LinkBtn size="small">{obj.fuel}</LinkBtn>
        <p>
          <span>Color:</span>
          {' '}
          {obj.color}
        </p>
        <p>
          <span>Salon:</span>
          {' '}
          {obj.salon}
        </p>
        <p>
          <span>Engine:</span>
          {' '}
          {obj.engine}
        </p>
        <p>
          <span>Price:</span>
          {' '}
          {obj.price}
        </p>
        <p>
          <span>Total price:</span>
          {' '}
          {obj.price}
        </p>
      </div>
    </Wrap>
  );
};

export default Description;
