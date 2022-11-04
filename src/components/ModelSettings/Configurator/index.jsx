import React from 'react';

// Images
import red from 'assets/images/red.webp';
import black from 'assets/images/black.webp';
import white from 'assets/images/white.webp';
import gray from 'assets/images/darkGray.webp';

import leatherBlack from 'assets/images/leatherBlackCombi.png';
import leatherRed from 'assets/images/leatherRed.jpg';
import leatherBrown from 'assets/images/leatherBrown.png';
import textileBlack from 'assets/images/textileBlack.png';

import wheel1 from 'assets/images/alloyWheel1.png';
import wheel2 from 'assets/images/alloyWheel2.png';
import wheel3 from 'assets/images/alloyWheel3.jpg';
import wheel4 from 'assets/images/alloyWheel4.jpg';

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
          <img src={gray} alt="car color" />
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
      <h3>Alloy wheels</h3>
      <ContentWrap>
        <Square>
          <img src={wheel1} alt="wheel" />
        </Square>
        <Square>
          <img src={wheel2} alt="wheel" />
        </Square>
        <Square>
          <img src={wheel3} alt="wheel" />
        </Square>
        <Square>
          <img src={wheel4} alt="wheel" />
        </Square>
      </ContentWrap>
    </BlockWrap>
  </Wrap>
);

export default Configurator;
