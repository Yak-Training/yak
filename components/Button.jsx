import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MuiButton from '@mui/material/Button';

const StyledMuiButton = styled(MuiButton)`
  ${(props) => props.reversed && `
    background-color: #ffffff;
    color: #D5573B;

    &:hover {
      background-color: #ffffff;
    }
  `
}
`;

const Button = ({ children, ...props }) => (
  <StyledMuiButton {...props}>
    {children}
  </StyledMuiButton>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
