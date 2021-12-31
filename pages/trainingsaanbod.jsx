import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import Card from '../components/Card';
import Head from '../components/Head';
import Layout, { HeroTypography } from '../components/Layout';
import eventQuery from '../lib/queries/eventQuery';
import eventListQuery from '../lib/queries/eventListQuery';
import client from '../lib/client';
import Anchor from '../components/Anchor';

export async function getStaticProps() {
  const { data: { events } } = await client.query({
    query: eventQuery,
  });

  const { data: { eventLists } } = await client.query({
    query: eventListQuery,
  });

  const {
    description: {
      html: description,
    },
    heroImage: {
      url: heroImage,
    },
  } = eventLists[0];

  return {
    props: {
      events,
      description,
      heroImage,
    },
  };
}

export default function TrainingsAanbod({ events, description, heroImage }) {
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
        maxWidth="1536px"
        heroImage={heroImage}
        heroText={(
          <HeroTypography variant="h3" color="black">
            Training en Events
          </HeroTypography>
      )}
      >
        <div>
          <Grid
            container
            justifyContent="center"
            spacing={3}
          >
            <div dangerouslySetInnerHTML={{ __html: description }} />
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
        </div>
      </Layout>
    </>
  );
}

TrainingsAanbod.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  })),
  heroImage: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.shape({})),
};

TrainingsAanbod.defaultProps = {
  events: [
    {
      title: null,
      shortDescription: null,
      image: {
        url: null,
      },
    },
  ],
  heroImage: null,
  description: null,
};
