import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const TeaserBackground = styled.div`
  padding: 72px 24px;
  background-color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
`;

const Teaser = () => (
  <TeaserBackground>
    <Typography color="white" component="h2" variant="h6">Stap veilig buiten je comfortzone om zo te ontwikkelen als individu én als groep</Typography>
  </TeaserBackground>
);

export default Teaser;
