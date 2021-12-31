import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Head from '../components/Head';
import Layout, { HeroTypography } from '../components/Layout';
import onzeAanpakQuery from '../lib/queries/onzeAanpakQuery';
import client from '../lib/client';

export async function getStaticProps() {
  const { data: { onzeAanpaks } } = await client.query({
    query: onzeAanpakQuery,
  });

  const { description: { html: description }, heroImage: { url: heroImage } } = onzeAanpaks[0];

  return {
    props: {
      heroImage,
      description,
    },
  };
}

export default function OnzeAanpak({ heroImage, description }) {
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
      heroImage={heroImage}
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
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Layout>
  );
}

OnzeAanpak.propTypes = {
  heroImage: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.shape({})),
};

OnzeAanpak.defaultProps = {
  heroImage: null,
  description: null,
};
