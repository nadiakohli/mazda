import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Slider from './Slider';
import Description from './Description';
import Configurator from './Configurator';

// Styles
import { Wrap, ContentWrap } from './styled';

const ModelSettings = () => {
  const params = useParams();
  console.log(params);
  return (
    <Wrap>
      <ContentWrap>
        <Slider />
        <Description />
      </ContentWrap>
      <div>
        <Configurator />
      </div>
    </Wrap>
  );
};

export default ModelSettings;
