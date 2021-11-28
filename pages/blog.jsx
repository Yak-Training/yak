import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Card from '../components/Card';
import Head from '../components/Head';
import aanpak from '../public/aanpak.jpg';
import Layout, { HeroTypography } from '../components/Layout';
import blogQuery from '../lib/queries/blogQuery';
import client from '../lib/client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: blogQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default function BlogPage({ data }) {
  const { blogs } = data;
  return (
    <>
      <Head
        title="Yak blog"
        description="Yak blog"
      />
      <Layout
        maxWidth="1440px"
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
            Blog
          </HeroTypography>
      )}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          {blogs.map((blog) => {
            const {
              title, image: { url }, slug, shortDescription,
            } = blog;

            return (
              <Grid item xs={12} sm={12} md={4} key={slug}>
                <Link
                  href={{
                    pathname: '/blog/[slug]',
                    query: { slug },
                  }}
                >
                  <a>
                    <Card
                      title={title}
                      description={shortDescription}
                      image={url}
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

BlogPage.propTypes = {
  data: PropTypes.shape({
    blogs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      shortDescription: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
    })),
  }),
};

BlogPage.defaultProps = {
  data: {
    blogs: [
      {
        title: null,
        shortDescription: null,
        image: {
          url: null,
        },
      },
    ],
  },
};
