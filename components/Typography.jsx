import React from 'react';
import MuiTypography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Typography = ({
  align,
  children,
  tag,
  className,
  noWrap,
  variant,
  color,
}) => (
  <MuiTypography
    align={align}
    component={tag}
    className={className}
    noWrap={noWrap}
    variant={variant}
    color={color}
  >
    {children}
  </MuiTypography>
);

Typography.defaultProps = {
  align: 'inherit',
  children: null,
  tag: 'div',
  className: null,
  variant: 'inherit',
  noWrap: false,
  color: 'textPrimary',
};

Typography.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  noWrap: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Typography;
