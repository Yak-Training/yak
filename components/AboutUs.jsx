import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const MaxWidth = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 32px 16px;

    @media(min-width: 1024px) {
      padding: 72px 24px;
    }
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 32px;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background};
`;

const AboutUs = () => (
  <Background>
    <MaxWidth>
      <Title variant="h4" color="primary">Wie zijn wij?</Title>
    </MaxWidth>
  </Background>
);

export default AboutUs;
