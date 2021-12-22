import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TeamMember from './List/TeamMember';

const MaxWidth = styled.div`
  max-width: 1536px;
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
              role,
              bio: {
                html: description,
              },
              image: {
                url,
              },
            },
          } = teamMember;

          return (
            <Grid item xs={12} sm={6} md={6} key={name}>
              <TeamMember
                title={name}
                description={description}
                image={url}
                role={role}
              />
            </Grid>
          );
        })}
      </Grid>
    </MaxWidth>
  </Background>
);

AboutUs.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      bio: PropTypes.shape({
        html: PropTypes.string,
      }),
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  })),
};

AboutUs.defaultProps = {
  teams: [
    {
      node: {
        name: null,
        role: null,
        bio: {
          html: null,
        },
        image: {
          url: null,
        },
      },
    },
  ],
};

export default AboutUs;
