import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';
import ContactForm from '../components/ContactForm';

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
        maxWidth="1536px"
        crumbsData={crumbsData}
        heroImage={aanpak}
        heroText={(
          <HeroTypography variant="h3" color="black">
            Contact
          </HeroTypography>
      )}
      >
        <ContactForm />
      </Layout>
    </>
  );
}
