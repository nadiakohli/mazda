/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { ReactComponent as Reset } from 'assets/icons/reset.svg';

// Translate
import { useTranslation } from 'react-i18next';

import { carColors, salonTypes, wheelTypes } from 'config/config';

// Styles
import {
  Wrap,
  BlockWrap,
  ContentWrap,
  Button,
  WrapBtn,
} from './styled';

const Configurator = ({
  data,
  handleColorChange,
  handleSalonChange,
  handleWheelChange,
  handleDefaultData,
  totalPrice,
}) => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <WrapBtn>
        <Button
          onClick={() => handleDefaultData()}
          type="button"
        >
          <Reset />
        </Button>
      </WrapBtn>
      <BlockWrap>
        <h3>
          {t('models.color')}
          {' '}
          {data.colorPrice}
          {' '}
          $
        </h3>
        <ContentWrap>
          {carColors.length
            ? carColors.map((item, id) => (
              <div
                key={item.id}
                className={`${data?.color === item.colorName ? 'active' : ''}`}
                onClick={() => handleColorChange(carColors[id])}
              >
                <img src={item.image} alt="car color" />
              </div>
            ))
            : null}
        </ContentWrap>
      </BlockWrap>
      <BlockWrap>
        <h3>
          {t('models.salon')}
          {' '}
          {data.salonPrice}
          {' '}
          $
        </h3>
        <ContentWrap>
          {salonTypes.length
            ? salonTypes.map((item, id) => (
              <div
                key={item.id}
                className={`${data?.salon === item.type ? 'active' : ''}`}
                onClick={() => handleSalonChange(salonTypes[id])}
              >
                <img src={item.image} alt="salon type" />
              </div>
            ))
            : null}
        </ContentWrap>
      </BlockWrap>
      <BlockWrap>
        <h3>
          {t('models.alloyWheel')}
          {' '}
          {data.wheelPrice}
          {' '}
          $
        </h3>
        <ContentWrap>
          {wheelTypes.length
            ? wheelTypes.map((item, id) => (
              <div
                key={item.id}
                className={`${data?.wheel === item.wheel ? 'active' : ''}`}
                onClick={() => handleWheelChange(wheelTypes[id])}
              >
                <img src={item.image} alt="wheel type" />
              </div>
            ))
            : null}
        </ContentWrap>
      </BlockWrap>
      <BlockWrap borderTop>
        <h3>
          {t('models.totalPrice')}
          {' '}
          {totalPrice}
          {' '}
          $
        </h3>
      </BlockWrap>
    </Wrap>
  );
};

Configurator.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    salon: PropTypes.string,
    wheel: PropTypes.string,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleSalonChange: PropTypes.func.isRequired,
  handleWheelChange: PropTypes.func.isRequired,
};

export default Configurator;
