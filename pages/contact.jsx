import React from 'react';
import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';

export default function TraingsAanbod() {
  const crumbsData = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon fontSize="small" />,
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <>
      <Head
        title="Contact"
        description="Contact Yak"
      />
      <Layout
        crumbsData={crumbsData}
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
            Contact
          </HeroTypography>
      )}
      >
        <h1>Contact</h1>
      </Layout>
    </>
  );
}
