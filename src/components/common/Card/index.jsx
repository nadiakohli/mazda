import React from 'react';
import PropTypes from 'prop-types';

// Translate
import { useTranslation } from 'react-i18next';

// Styles
import { Wrap, DescriptionWrap } from './styled';

const Card = ({
  link,
  title,
  description,
  borderRight,
}) => {
  const { t } = useTranslation();
  console.log(description);
  return (
    <Wrap>
      <img src={link} alt="car model" />
      <DescriptionWrap borderRight={borderRight}>
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
      </DescriptionWrap>
    </Wrap>
  );
};

Card.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  borderRight: PropTypes.bool,
};

Card.defaultProps = {
  borderRight: false,
};

export default Card;
