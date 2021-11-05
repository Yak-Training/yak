import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Card from './Card';
import team from '../data/team';

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

const Description = styled(Typography)`
  margin: 0 auto 72px;
  text-align: center;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background};
`;

const AboutUs = () => (
  <Background>
    <MaxWidth>
      <Title variant="h4" color="primary">Wie zijn wij?</Title>
      <Description variant="body1" color="primary">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.</Description>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        {team.map((person) => {
          const {
            name, description, image,
          } = person;
          return (
            <Grid item xs={12} sm={12} md={4}>
              <Card
                title={name}
                description={description}
                image={image}
              />
            </Grid>
          );
        })}
      </Grid>
    </MaxWidth>
  </Background>
);

export default AboutUs;
