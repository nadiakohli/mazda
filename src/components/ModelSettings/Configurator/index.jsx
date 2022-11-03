import React from 'react';

// Images
import red from 'assets/images/red.webp';
import black from 'assets/images/black.webp';
import white from 'assets/images/white.webp';
import blue from 'assets/images/blue.webp';

import leatherBlack from 'assets/images/leatherBlackCombi.png';
import leatherRed from 'assets/images/leatherRed.jpg';
import leatherBrown from 'assets/images/leatherBrown.png';
import textileBlack from 'assets/images/textileBlack.png';

import disc from 'assets/images/disc.jpg';
import disc1 from 'assets/images/disc1.jpg';
import disc2 from 'assets/images/disc2.jpg';

// Components
import Square from 'components/common/Square';

// Styles
import { Wrap, BlockWrap, ContentWrap } from './styled';

const Configurator = () => (
  <Wrap>
    <BlockWrap>
      <h3>Color</h3>
      <ContentWrap>
        <Square>
          <img src={red} alt="car color" />
        </Square>
        <Square>
          <img src={black} alt="car color" />
        </Square>
        <Square>
          <img src={white} alt="car color" />
        </Square>
        <Square>
          <img src={blue} alt="car color" />
        </Square>
      </ContentWrap>
    </BlockWrap>
    <BlockWrap>
      <h3>Salon</h3>
      <ContentWrap>
        <Square>
          <img src={textileBlack} alt="textile color" />
        </Square>
        <Square>
          <img src={leatherBlack} alt="leather color" />
        </Square>
        <Square>
          <img src={leatherBrown} alt="leather color" />
        </Square>
        <Square>
          <img src={leatherRed} alt="leather color" />
        </Square>
      </ContentWrap>
    </BlockWrap>
    <BlockWrap>
      <h3>Engine</h3>
      <ContentWrap>
        <Square>
          <img src={disc} alt="engine" />
        </Square>
        <Square>
          <img src={disc1} alt="engine turbo" />
        </Square>
        <Square>
          <img src={disc2} alt="engine turbo" />
        </Square>
      </ContentWrap>
    </BlockWrap>
  </Wrap>
);

export default Configurator;
