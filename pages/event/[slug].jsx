import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import aanpak from '../../public/aanpak.jpg';

const Event = () => (
  <Layout
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
  >
    <h1>Welcome to my event</h1>
  </Layout>
);

export default Event;
