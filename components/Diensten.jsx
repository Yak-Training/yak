import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from './Card';

const MaxWidth = styled.div`
    margin: 0 auto;
    max-width: 1536px;
    padding: 32px 16px;

    @media(min-width: 1024px) {
      padding: 72px 24px;
    }
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 32px;
`;

const Subtitle = styled(Typography)`
    text-align: center;
    margin: 0 auto 72px;
`;

const RelativeContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background};
`;

const Diensten = ({ services }) => (
  <RelativeContainer>
    <Background>
      <MaxWidth>
        <Title variant="h4" color="primary">Wat bieden wij aan?</Title>
        <Subtitle variant="body1">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum consequat.
        </Subtitle>
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={5}
          alignItems="stretch"
        >
          {services.map((service) => {
            const {
              title,
              description: {
                html: description,
              },
              image: {
                url,
              },
            } = service;
            return (
              <Grid item xs={12} sm={4} md={4}>
                <Card
                  title={title}
                  description={description}
                  image={url}
                />
              </Grid>
            );
          })}
        </Grid>
      </MaxWidth>
    </Background>
  </RelativeContainer>
);

Diensten.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: {
      html: PropTypes.string,
    },
  })),
};

Diensten.defaultProps = {
  services: {
    title: null,
    description: {
      html: null,
    },
  },
};

export default Diensten;
