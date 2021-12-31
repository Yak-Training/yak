import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import Card from '../components/Card';
import Head from '../components/Head';
import Layout, { HeroTypography } from '../components/Layout';
import blogQuery from '../lib/queries/blogQuery';
import blogListQuery from '../lib/queries/blogListQuery';
import client from '../lib/client';
import Anchor from '../components/Anchor';

export async function getStaticProps() {
  const { data: { blogs } } = await client.query({
    query: blogQuery,
  });

  const { data: { blogLists } } = await client.query({
    query: blogListQuery,
  });

  const {
    description: {
      html: description,
    },
    heroImage: {
      url: heroImage,
    },
  } = blogLists[0];

  return {
    props: {
      blogs,
      description,
      heroImage,
    },
  };
}

export default function BlogPage({ blogs, heroImage, description }) {
  const crumbsData = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon fontSize="small" />,
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ];

  return (
    <>
      <Head
        title="Yak blog"
        description="Yak blog"
      />
      <Layout
        heroImage={heroImage}
        maxWidth="1536px"
        heroText={(
          <HeroTypography variant="h3" color="black">
            Blog
          </HeroTypography>
      )}
        crumbsData={crumbsData}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={5}
        >
          <div dangerouslySetInnerHTML={{ __html: description }} />
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
                  <Anchor>
                    <Card
                      title={title}
                      description={shortDescription}
                      image={url}
                    />
                  </Anchor>
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
  blogs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  })),
  heroImage: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.shape({})),
};

BlogPage.defaultProps = {
  blogs: [
    {
      title: null,
      shortDescription: null,
      image: {
        url: null,
      },
    },
  ],
  heroImage: null,
  description: null,
};
