import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Layout from '../../components/Layout';
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
  } = event;
  return (
    <Layout
      maxHeight
      heroImage={(
        <Image
          alt="Aanpak"
          src={url}
          layout="fill"
          objectFit="cover"
        />
)}
    >
      <h1>{title}</h1>
      <p>{date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
      />
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
  },
};

export default Event;
