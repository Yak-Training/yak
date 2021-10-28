import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import Footer from './Footer';
import Typography from './Typography';

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledTypography = styled(Typography)`
  padding: 12px 0;

  @media (min-width: 1024px) {
    padding: 0 24px;
  }
`;

export const HeroTypography = styled(Typography)`
  && {
    font-size: 1.8rem;
    letter-spacing: -1px;

    @media (min-width: 600px) {
      font-size: 2.5rem;
    }

    @media (min-width: 720px) {
      font-size: 4rem;
    }
  }
`;

const Container = styled.main`
  ${(props) => (props.noPadding ? 'padding: 0;' : 'padding: 24px 16px;')}

  @media (min-width: 600px) {
    ${(props) => (props.noPadding ? 'padding: 0;' : 'padding: 24px;')}
  }
`;

const Overlay = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  opacity: 20%;
`;

const HeroContainer = styled.div`
  position: relative;

  &&& {
    img {
      filter: grayscale(100%) !important;
    }
  }

  @media(min-width: 720px) {
    ${(props) => props.maxHeight && `
      max-height: 250px;
      overflow: hidden;

      &&& {
        img {
          margin-top: -300px !important;
        }
      }
    `}
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
    name: 'Partners',
    href: '/partners',
  },
];

const Layout = ({
  heroImage, children, heroText, button, maxHeight, noPadding,
}) => (
  <>
    <Navigation
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
    <HeroContainer maxHeight={maxHeight}>
      <Overlay />
      <HeroText>
        {heroText}
        {button}
      </HeroText>
      {heroImage}
    </HeroContainer>
    <Container noPadding={noPadding}>
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
};

Layout.defaultProps = {
  heroImage: null,
  children: null,
  heroText: null,
  button: null,
  maxHeight: false,
  noPadding: false,
};

export default Layout;
