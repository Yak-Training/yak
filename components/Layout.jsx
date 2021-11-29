import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Typography from './Typography';

const StyledAnchor = styled.a`
  text-decoration: none;
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
    text-shadow: 1px 2px 1px rgba(0,0,0,0.5);
    font-size: 2rem;
    letter-spacing: -1px;

    @media (min-width: 600px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
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

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;

  @media(min-width: 1024px) {
    ${(props) => (props.maxHeight ? `
      width: 100vw;
      height: 40vh;`
    : ` 
    width: 100vw; 
    height: 100vh;`
  )}
  }
`;

const HeroText = styled.div`
  position: absolute;
  z-index: 15;
  max-width: 1024px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  button {
    margin-top: 24px;

    @media (min-width: 600px) {
      margin-top: 40px;
    }
  }
`;

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Onze aanpak',
    href: '/onze-aanpak',
  },
  {
    name: 'Trainingsaanbod',
    href: '/trainingsaanbod',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Layout = ({
  heroImage,
  children,
  heroText,
  button,
  maxHeight,
  noPadding,
  maxWidth,
}) => (
  <>
    <Navigation
      links={links.map((link) => {
        const { name, href } = link;
        return (
          <Link href={href} passHref key={href}>
            <StyledAnchor>
              <StyledTypography color="white" variant="subtitle2">
                {name}
              </StyledTypography>
            </StyledAnchor>
          </Link>
        );
      })}
    />
    <HeroContainer maxHeight={maxHeight}>
      <HeroText>
        {heroText}
        {button}
      </HeroText>
      {heroImage}
    </HeroContainer>
    <Container noPadding={noPadding} maxWidth={maxWidth}>
      {children}
    </Container>
    <Footer
      links={links.map((link) => {
        const { name, href } = link;
        return (
          <Link href={href} passHref key={href}>
            <StyledAnchor>
              <StyledTypography variant="subtitle2">
                {name}
              </StyledTypography>
            </StyledAnchor>
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
  button: PropTypes.node,
  maxHeight: PropTypes.bool,
  noPadding: PropTypes.bool,
  maxWidth: PropTypes.string,
};

Layout.defaultProps = {
  heroImage: null,
  children: null,
  heroText: null,
  button: null,
  maxHeight: false,
  noPadding: false,
  maxWidth: null,
};

export default Layout;
