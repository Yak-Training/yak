import React from 'react';
import Image from 'next/image';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';

export default function TraingsAanbod() {
  return (
    <>
      <Head
        title="Partners"
        description="Yak Partners"
      />
      <Layout
        maxHeight
        heroImage={(
          <Image
            alt="Aanpak"
            src={aanpak}
            layout="responsive"
            width={6000}
            height={4000}
            placeholder="blur"
          />
    )}
        heroText={(
          <HeroTypography variant="h3" color="white">
            Partners
          </HeroTypography>
      )}
      >
        <h1>Partners</h1>
      </Layout>
    </>
  );
}
