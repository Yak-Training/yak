import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Card from '../components/Card';
import events from '../data/events';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';

export default function TraingsAanbod() {
  return (
    <>
      <Head
        title="Training en Events"
        description="Yak Training en Events"
      />
      <Layout
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
            Training en Events
          </HeroTypography>
      )}
      >
        <h1>Training en Events</h1>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          {events.map((event) => {
            const {
              title, description, image, slug,
            } = event;
            return (
              <Grid item xs={12} sm={12} md={4}>
                <Link
                  href={{
                    pathname: '/event/[slug]',
                    query: { slug },
                  }}
                >
                  <a>
                    <Card
                      title={title}
                      description={description}
                      image={image}
                    />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    </>
  );
}