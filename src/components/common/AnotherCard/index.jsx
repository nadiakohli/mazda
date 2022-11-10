import React from 'react';
import PropTypes from 'prop-types';

// Translate
import { useTranslation } from 'react-i18next';

// Styles
import {
  Wrap,
  DescriptionWrap,
  ImageWrap,
  LinkBtn,
} from './styled';

const AnotherCard = ({
  to,
  link,
  title,
  fuel,
  color,
  salon,
  engine,
  wheel,
  price,
}) => {
  const { t } = useTranslation();
  return (
    <Wrap>
      <ImageWrap>
        <img src={link} alt="car model" />
      </ImageWrap>
      <DescriptionWrap>
        <div>
          <h2>{title}</h2>
          <LinkBtn size="small">{t('models.fuel')}</LinkBtn>
          <p>
            <span>{t('models.color')}</span>
            {' '}
            {color}
          </p>
          <p>
            <span>{t('models.salon')}</span>
            {' '}
            {salon}
          </p>
          <p>
            <span>{t('models.engine')}</span>
            {' '}
            {engine}
          </p>
          <p>
            <span>{t('models.alloyWheel')}</span>
            {' '}
            {wheel}
          </p>
          <p>
            <span>{t('models.price')}</span>
            {' '}
            {price}
            {' '}
            $
          </p>
        </div>
        <LinkBtn to={`/models/${to}`}>{t('models.buttonName')}</LinkBtn>
      </DescriptionWrap>
    </Wrap>
  );
};
AnotherCard.propTypes = {
  to: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  salon: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  wheel: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default AnotherCard;
