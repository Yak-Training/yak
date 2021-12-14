import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Layout, { HeroTypography } from '../../components/Layout';
import eventQuery from '../../lib/queries/eventQuery';
import client from '../../lib/client';

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
      crumbsData={crumbsData}
      maxHeight
      heroText={(
        <HeroTypography variant="h3" color="white">
          {title}
        </HeroTypography>
      )}
      heroImage={(
        <Image
          alt="Aanpak"
          src={url}
          layout="fill"
          objectFit="cover"
        />
)}
    >
      <Box
        component="div"
        sx={{
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        <p>{date}</p>
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
  },
};

export default Event;
