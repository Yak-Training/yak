import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';

export default function OnzeAanpak() {
  const crumbsData = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon fontSize="small" />,
    },
    {
      label: 'Contact',
      href: '/onze-aanpak',
    },
  ];

  return (
    <Layout
      maxWidth="1536px"
      crumbsData={crumbsData}
      heroImage={aanpak}
      heroText={(
        <HeroTypography variant="h3" color="black">
          Onze Aanpak
        </HeroTypography>
      )}
    >
      <Head
        title="Onze aanpak"
        description="Yak aanpak"
      />
      <h1>Onze aanpak</h1>
    </Layout>
  );
}
