import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MuiDrawer from '@mui/material/Drawer';

const StyledDrawer = styled(MuiDrawer)`
  &&& {
    padding: 24px;
  }
`;

const Drawer = ({ children, ...props }) => (
  <StyledDrawer
    {...props}
  >
    {children}
  </StyledDrawer>
);

Drawer.propTypes = {
  children: PropTypes.node,
};

Drawer.defaultProps = {
  children: null,
};

export default Drawer;
