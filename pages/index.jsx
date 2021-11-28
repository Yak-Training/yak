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

export async function getStaticProps() {
  const { data } = await client.query({
    query: teamQuery,
  });

  const { teamsConnection: { edges: teams } } = data;
  return {
    props: {
      teams,
    },
  };
}

export default function Home({ teams }) {
  return (
    <Layout
      noPadding
      heroText={(
        <HeroTypography variant="h3" color="white">
          Creating Sustainable Engagement
        </HeroTypography>
        )}
      button={<Button color="secondary" variant="contained">Contact</Button>}
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
      <Diensten />
      <Teaser />
      <AboutUs
        teams={teams}
      />
    </Layout>
  );
}

Home.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  teams: [],
};
