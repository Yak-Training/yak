import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ title, description }) => (
  <NextHead>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Open+Sans&display=swap" rel="stylesheet" />
    {title && description && (
      <>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
      </>
    )}
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
};

export default Head;
