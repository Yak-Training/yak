import React from 'react';
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
  const event = data.events.find((event) => event.slug === slug);

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
      <p
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Layout>
  );
};

export default Event;
