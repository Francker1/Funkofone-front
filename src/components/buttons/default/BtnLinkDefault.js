import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// is possible create a styled component in same file or in separate files like btnBubble
const LinkDefault = styled(Link)`
  background-color: ${(props) => (props.outlined ? 'transparent' : 'var(--accent-color)')};
  border: ${(props) => (props.outlined ? '1.5px solid var(--accent-color)' : 'none')};
  color: ${(props) => (props.outlined ? 'var(--accent-color)' : 'var(--white-color)')};

  &:hover {
    background-color: var(--accent-color-dark);
    color: var(--white-color);
    text-decoration: none;
  }
`;

const BtnLinkDefault = ({ url, text, className, ...props }) => {
  const { outlined } = props;

  return (
    <LinkDefault to={url} className={className} outlined={outlined}>
      {text}
    </LinkDefault>
  );
};

BtnLinkDefault.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  outlined: PropTypes.string,
};

BtnLinkDefault.defaultProps = {
  className: 'btn',
  outlined: '',
};

export default BtnLinkDefault;
