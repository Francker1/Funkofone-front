import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from './styled';

const BtnBubble = ({ url, text }) => {
  return (
    <StyledLink to={url} className="bubble-btn | rounded shadow-sm ">
      {text}
      <span />
      <span />
      <span />
      <span />
    </StyledLink>
  );
};

BtnBubble.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BtnBubble;
