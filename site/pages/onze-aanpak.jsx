import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';

export default function OnzeAanpak() {
  return (
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
          Onze Aanpak
        </HeroTypography>
      )}
    >
      <h1>Onze aanpak</h1>
    </Layout>
  );
}
