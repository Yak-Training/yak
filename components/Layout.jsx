import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import Footer from './Footer';
import Typography from './Typography';
import CustomizedBreadcrumbs, { StyledBreadcrumb } from './BreadCrumbs';
import Anchor from './Anchor';
import links from '../data/links';
import Hero from './Hero';
import Navigation from './Navigation';

const StyledAnchor = styled(Anchor)`
  margin: 4px 0;
  display: inline-block;
`;

const StyledTypography = styled(Typography)`
  padding: 12px 0;
  color: ${(props) => (props.theme.palette.common.black)};

  @media (min-width: 1024px) {
    padding: 0 24px;
    color: ${(props) => (props.color === 'white' ? props.theme.palette.common.white : props.theme.palette.common.black)};
  }
`;

export const HeroTypography = styled(Typography)`
  && {
    font-size: 2rem;
    letter-spacing: -1px;

    @media (min-width: 600px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }
  }
`;

const Container = styled.main`
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
  ${(props) => (props.noPadding ? 'padding: 0;' : 'padding: 24px 16px;')}

  @media (min-width: 600px) {
    ${(props) => (props.noPadding ? 'padding: 0;' : 'padding: 24px;')}
  }
`;

const BreadCrumbsContainer = styled.div`
  margin-bottom: 24px;
`;

const Layout = ({
  children,
  heroText,
  heroImage,
  noPadding,
  maxWidth,
  noBreadCrumbs,
  crumbsData,
  contactButton,
}) => (
  <>
    <Hero
      contactButton={contactButton}
      heroImage={heroImage}
      navigation={<Navigation />}
      heroText={heroText}
    />
    <Container noPadding={noPadding} maxWidth={maxWidth}>
      { noBreadCrumbs ? null
        : (
          <BreadCrumbsContainer>
            <CustomizedBreadcrumbs
              crumbs={crumbsData.map((crumb) => {
                const {
                  label, icon, href,
                } = crumb;
                return (
                  <Link
                    href={href}
                    passHref
                  >
                    <StyledAnchor>
                      <StyledBreadcrumb
                        component="span"
                        label={label}
                        icon={icon}
                      />
                    </StyledAnchor>
                  </Link>
                );
              })}
            />
          </BreadCrumbsContainer>
        )}
      {children}
    </Container>
    <Footer
      links={links.map((link) => {
        const { name, href } = link;
        return (
          <Link href={href} passHref key={href}>
            <Anchor>
              <StyledTypography variant="subtitle2">
                {name}
              </StyledTypography>
            </Anchor>
          </Link>
        );
      })}
    />
  </>
);

Layout.propTypes = {
  heroImage: PropTypes.node,
  children: PropTypes.node,
  heroText: PropTypes.node,
  noPadding: PropTypes.bool,
  maxWidth: PropTypes.string,
  noBreadCrumbs: PropTypes.bool,
  crumbsData: PropTypes.arrayOf(PropTypes.shape({})),
  contactButton: PropTypes.bool,
};

Layout.defaultProps = {
  heroImage: null,
  children: null,
  heroText: null,
  noPadding: false,
  maxWidth: null,
  noBreadCrumbs: false,
  crumbsData: [],
  contactButton: false,
};

export default Layout;
