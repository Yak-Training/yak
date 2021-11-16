import React from 'react';
import Image from 'next/image';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import Layout, { HeroTypography } from '../components/Layout';
import hero from '../public/hero.jpg';
import Button from '../components/Button';
import Head from '../components/Head';
import Diensten from '../components/Diensten';
import Teaser from '../components/Teaser';
import AboutUs from '../components/AboutUs';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckv72x2ho50t801xl47jpflk2/master',
  cache: new InMemoryCache(),
});

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
      <AboutUs />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: teams } = await client.query({
    query: gql`
    query teamsQuery {
    teams {
      name
      bio {
        html
      }
    }
  }`,
  });
  console.log(teams);
  return {
    props: {
      teams,
    },
  };
}
