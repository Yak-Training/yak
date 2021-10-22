import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';

export default function Blog() {
  return (
    <>
      <Head
        title="Blog"
        description="Yak Blog"
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
            Blog
          </HeroTypography>
      )}
      >
        <h1>blog</h1>
        <Link
          href={{
            pathname: '/blog/[post]',
            query: { post: 'my-post' },
          }}
        >
          <a>post 1</a>
        </Link>
      </Layout>
    </>
  );
}
