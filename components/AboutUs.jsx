import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TeamMember from './List/TeamMember';
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
  background-color: ${(props) => props.theme.palette.common.white};
`;

const AboutUs = ({ teams }) => (
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
        {teams.map((teamMember) => {
          const {
            node:
            {
              name,
              bio: {
                html: description,
              },
              image: {
                url,
              },
            },
          } = teamMember;
          return (
            <Grid item xs={12} sm={6} md={6}>
              <TeamMember
                title={name}
                description={description}
                image={url}
              />
            </Grid>
          );
        })}
      </Grid>
    </MaxWidth>
  </Background>
);

export default AboutUs;
