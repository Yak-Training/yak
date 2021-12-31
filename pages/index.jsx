import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout, { HeroTypography } from '../components/Layout';
import Button from '../components/Button';
import Head from '../components/Head';
import Diensten from '../components/Diensten';
import Anchor from '../components/Anchor';
import Teaser from '../components/Teaser';
import AboutUs from '../components/AboutUs';
import client from '../lib/client';
import teamQuery from '../lib/queries/teamQuery';
import heroQuery from '../lib/queries/heroQuery';
import serviceQuery from '../lib/queries/serviceQuery';

export async function getStaticProps() {
  const { data: { teamsConnection } } = await client.query({
    query: teamQuery,
  });

  const { data: { heroes } } = await client.query({
    query: heroQuery,
  });

  const { data: { services } } = await client.query({
    query: serviceQuery,
  });

  const { edges: teams } = teamsConnection;
  const { heroText, image: { url: heroImage } } = heroes[0];
  return {
    props: {
      teams,
      heroText,
      services,
      heroImage,
    },
  };
}

export default function Home({
  teams, heroText, services, heroImage,
}) {
  return (
    <Layout
      noPadding
      contactButton
      heroImage={heroImage}
      heroText={(
        <HeroTypography variant="h3" color="black">
          {heroText}
        </HeroTypography>
        )}
      button={(
        <Link
          href={{
            pathname: '/contact',
          }}
        >
          <Anchor>
            <Button color="secondary" variant="contained">
              Contact
            </Button>
          </Anchor>
        </Link>
)}
      noBreadCrumbs
    >
      <Head
        title="Yak"
        description="Creating sustainable engagement"
      />
      <Diensten services={services} />
      <Teaser />
      <AboutUs
        teams={teams}
      />
    </Layout>
  );
}

Home.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({})),
  heroText: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.shape({})),
  heroImage: PropTypes.string,
};

Home.defaultProps = {
  teams: [],
  heroText: null,
  services: [],
  heroImage: null,
};
