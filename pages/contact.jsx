import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Head from '../components/Head';
import Layout, { HeroTypography } from '../components/Layout';
import ContactForm from '../components/ContactForm';
import contactQuery from '../lib/queries/contactQuery';
import client from '../lib/client';

export async function getStaticProps() {
  const { data: { contacts } } = await client.query({
    query: contactQuery,
  });

  const {
    description: {
      html: description,
    },
    heroImage: {
      url: heroImage,
    },
  } = contacts[0];

  return {
    props: {
      heroImage,
      description,
    },
  };
}

export default function Contact({ heroImage, description }) {
  const crumbsData = [
    {
      label: 'Home',
      href: '/',
      icon: <HomeIcon fontSize="small" />,
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <>
      <Head
        title="Contact"
        description="Contact Yak"
      />
      <Layout
        maxWidth="1536px"
        crumbsData={crumbsData}
        heroImage={heroImage}
        heroText={(
          <HeroTypography variant="h3" color="black">
            Contact
          </HeroTypography>
      )}
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <ContactForm />
      </Layout>
    </>
  );
}

Contact.propTypes = {
  heroImage: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.shape({})),
};

Contact.defaultProps = {
  heroImage: null,
  description: null,
};
