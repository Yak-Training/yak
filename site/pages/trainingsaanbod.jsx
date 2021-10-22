import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            layout="responsive"
            width={6000}
            height={4000}
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
        <Link
          href={{
            pathname: '/event/[slug]',
            query: { slug: 'my-event' },
          }}
        >
          <a>Event 1</a>
        </Link>
      </Layout>
    </>
  );
}
