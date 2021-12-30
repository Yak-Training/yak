import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Layout, { HeroTypography } from '../../components/Layout';
import eventQuery from '../../lib/queries/eventQuery';
import client from '../../lib/client';
import Typography from '../../components/Typography';

export async function getStaticPaths() {
  const { data } = await client.query({
    query: eventQuery,
  });

  const paths = data.events.map((event) => ({
    params: { slug: event.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: eventQuery,
  });

  const { slug } = params;
  const event = data.events.find((item) => item.slug === slug);

  return {
    props: {
      event,
    },
  };
}

const Event = ({ event }) => {
  const {
    title,
    description: {
      html: description,
    },
    image: {
      url,
    },
    date,
    slug,
    location,
  } = event;

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
    {
      label: title,
      href: `/event/${slug}`,
    },
  ];

  return (
    <Layout
      maxWidth="1536px"
      crumbsData={crumbsData}
      heroText={(
        <HeroTypography variant="h3" color="black">
          {title}
        </HeroTypography>
      )}
      heroImage={url}
    >
      <Box
        component="div"
        sx={{
          maxWidth: '640px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <Typography variant="subtitle2">
          Datum:
          {' '}
          {date}
        </Typography>
        <Typography variant="subtitle2">
          Locatie:
          {' '}
          {location}
        </Typography>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Box>
    </Layout>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    description: {
      html: PropTypes.string,
    },
    image: {
      url: PropTypes.string,
    },
    author: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    location: PropTypes.string,
  }),
};

Event.defaultProps = {
  event: {
    title: null,
    description: {
      html: null,
    },
    image: {
      url: null,
    },
    author: null,
    date: null,
    slug: null,
    location: null,
  },
};

export default Event;
