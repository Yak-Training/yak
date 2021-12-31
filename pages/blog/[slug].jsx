import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Layout, { HeroTypography } from '../../components/Layout';
import blogQuery from '../../lib/queries/blogQuery';
import client from '../../lib/client';

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
    author,
    slug,
    date,
  } = blog;

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
    {
      label: title,
      href: `/blog/${slug}`,
    },
  ];

  return (
    <Layout
      maxWidth="1536px"
      heroText={(
        <HeroTypography variant="h3" color="black">
          {title}
        </HeroTypography>
    )}
      heroImage={url}
      crumbsData={crumbsData}
    >
      <Box
        component="div"
        sx={{
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        <p>{author}</p>
        <p>{date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Box>
    </Layout>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
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
    slug: null,
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
