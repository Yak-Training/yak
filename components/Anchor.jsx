import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const Anchor = ({
  children,
}) => (
  <StyledAnchor>
    {children}
  </StyledAnchor>
);

Anchor.propTypes = {
  children: PropTypes.node,
};

Anchor.defaultProps = {
  children: null,
};

export default Anchor;
