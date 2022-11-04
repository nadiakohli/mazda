import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { cars2 } from 'config/config';

// Components
import Slider from './Slider';
import Description from './Description';
import Configurator from './Configurator';

// Styles
import { Wrap, ContentWrap } from './styled';

const ModelSettings = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const obj = cars2.find((item) => item.id === +id);
    setData(obj !== -1 ? obj : {});
  }, [id]);

  console.log(data);
  return (
    <Wrap>
      <ContentWrap>
        <Slider images={data.image} />
        <Description data={data} />
      </ContentWrap>
      <div>
        <Configurator />
      </div>
    </Wrap>
  );
};

export default ModelSettings;
