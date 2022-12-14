import React from 'react';
import PropTypes from 'prop-types';

// Translate
import { useTranslation } from 'react-i18next';

// Styles
import { LinkBtn } from 'components/common/AnotherCard/styled';
import { Wrap, ParagraphWrap } from './styled';

const Description = ({
  data,
  totalPrice,
}) => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <div>
        <h2>{data?.title}</h2>
        <LinkBtn size="small">{t('models.fuel')}</LinkBtn>
        <p>
          <span>{t('models.color')}</span>
          {' '}
          {t(`configurator.colors.${data?.color}.colorName`)}
        </p>
        <p>
          <span>{t('models.salon')}</span>
          {' '}
          {t(`configurator.salon.${data?.salon}.type`)}
        </p>
        <p>
          <span>{t('models.engine')}</span>
          {' '}
          {data?.engine}
        </p>
        <p>
          <span>{t('models.alloyWheel')}</span>
          {' '}
          {t(`configurator.wheel.${data?.wheel}.type`)}
        </p>
        <p>
          <span>{t('models.price')}</span>
          {' '}
          {data?.price}
          {' '}
          $
        </p>
        <p>
          <span>{t('models.totalPrice')}</span>
          {' '}
          {totalPrice}
          {' '}
          $
        </p>
      </div>
      <ParagraphWrap>
        <p>{t(`models.${data?.title}.description`)}</p>
      </ParagraphWrap>
    </Wrap>
  );
};

Description.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    salon: PropTypes.string,
    engine: PropTypes.string,
    price: PropTypes.number,
    wheel: PropTypes.string,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Description;
