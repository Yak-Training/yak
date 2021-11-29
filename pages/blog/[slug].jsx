import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Layout from '../../components/Layout';
import blogQuery from '../../lib/queries/blogQuery';
import client from '../../lib/client';
import CustomizedBreadcrumbs, { StyledBreadcrumb } from '../../components/BreadCrumbs';
import Anchor from '../../components/Anchor';

export async function getStaticPaths() {
  const { data } = await client.query({
    query: blogQuery,
  });

  const paths = data.blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: blogQuery,
  });

  const { slug } = params;
  const blog = data.blogs.find((blogPost) => blogPost.slug === slug);

  return {
    props: {
      blog,
    },
  };
}

const Blog = ({ blog }) => {
  const {
    title,
    description: {
      html: description,
    },
    image: {
      url,
    },
    slug,
    author,
    date,
  } = blog;
  return (
    <Layout
      maxWidth="720px"
      heroText={(
        <Typography variant="h3" color="white" component="h1">
          {title}
        </Typography>
    )}
      maxHeight
      heroImage={(
        <Image
          alt="Aanpak"
          src={url}
          layout="fill"
          objectFit="cover"
        />
)}
    >
      <CustomizedBreadcrumbs
        crumbs={(
          <>
            <Link
              href="/"
            >
              <Anchor>
                <StyledBreadcrumb
                  component="span"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
                />
              </Anchor>
            </Link>
            <Link
              href={{
                pathname: '/blogs/[slug]',
                query: { slug },
              }}
            >
              <Anchor>
                <StyledBreadcrumb
                  component="span"
                  label={title}
                />
              </Anchor>
            </Link>
          </>
)}
      />
      <p>{author}</p>
      <p>{date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Layout>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    description: {
      html: PropTypes.string,
    },
    image: {
      url: PropTypes.string,
    },
    author: PropTypes.string,
    date: PropTypes.string,
  }),
};

Blog.defaultProps = {
  blog: {
    title: null,
    description: {
      html: null,
    },
    image: {
      url: null,
    },
    author: null,
    date: null,
  },
};

export default Blog;
