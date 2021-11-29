import * as React from 'react';
import PropTypes from 'prop-types';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === 'light'
    ? theme.palette.grey[100]
    : theme.palette.grey[800];
  return {
    backgroundColor,
    cursor: 'pointer',
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function CustomizedBreadcrumbs({ crumbs }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {crumbs}
    </Breadcrumbs>
  );
}

CustomizedBreadcrumbs.propTypes = {
  crumbs: PropTypes.node,
};

CustomizedBreadcrumbs.defaultProps = {
  crumbs: null,
};
