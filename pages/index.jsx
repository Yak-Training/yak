import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Layout, { HeroTypography } from '../components/Layout';
import hero from '../public/hero.jpg';
import Button from '../components/Button';
import Head from '../components/Head';
import Diensten from '../components/Diensten';
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
  const { heroText } = heroes[0];
  return {
    props: {
      teams,
      heroText,
      services,
    },
  };
}

export default function Home({ teams, heroText, services }) {
  return (
    <Layout
      noPadding
      heroText={(
        <HeroTypography variant="h3" color="white">
          {heroText}
        </HeroTypography>
        )}
      button={<Button color="secondary" variant="contained">Contact</Button>}
      noBreadCrumbs
      heroImage={(
        <Image
          alt="Mountains"
          src={hero}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      )}
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
};

Home.defaultProps = {
  teams: [],
  heroText: null,
  services: [],
};
