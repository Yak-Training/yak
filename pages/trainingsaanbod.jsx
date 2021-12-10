import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import Card from '../components/Card';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';
import eventQuery from '../lib/queries/eventQuery';
import client from '../lib/client';
import Anchor from '../components/Anchor';

export async function getStaticProps() {
  const { data } = await client.query({
    query: eventQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default function TrainingsAanbod({ data }) {
  const { events } = data;

  const crumbsData = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon fontSize="small" />,
    },
    {
      label: 'Trainingsaanbod',
      href: '/trainingsaanbod',
    },
  ];

  return (
    <>
      <Head
        title="Training en Events"
        description="Yak Training en Events"
      />
      <Layout
        crumbsData={crumbsData}
        maxWidth="1440px"
        maxHeight
        heroImage={(
          <Image
            alt="Aanpak"
            src={aanpak}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
    )}
        heroText={(
          <HeroTypography variant="h3" color="white">
            Training en Events
          </HeroTypography>
      )}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={5}
        >
          {events.map((event) => {
            const {
              title, image: { url }, slug, shortDescription,
            } = event;
            return (
              <Grid item xs={12} sm={12} md={4} key={slug}>
                <Link
                  href={{
                    pathname: '/event/[slug]',
                    query: { slug },
                  }}
                >
                  <Anchor>
                    <Card
                      title={title}
                      description={shortDescription}
                      image={url}
                    />
                  </Anchor>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
}

TrainingsAanbod.propTypes = {
  data: PropTypes.shape({
    events: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      shortDescription: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
    })),
  }),
};

TrainingsAanbod.defaultProps = {
  data: {
    events: [
      {
        title: null,
        shortDescription: null,
        image: {
          url: null,
        },
      },
    ],
  },
};
