import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Typography from './Typography';
import CustomizedBreadcrumbs, { StyledBreadcrumb } from './BreadCrumbs';
import Anchor from './Anchor';

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
    margin-bottom: 32px;

    @media (min-width: 600px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }
  }
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 40vh;
  overflow: hidden;

  @media (min-width: 840px) {
    width: 70%;
    height: 60vh;
  }

  img {
    object-fit: cover;
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

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  background: ${(props) => (props.theme.palette.primary.main)};
  overflow: hidden;

  img {
    object-fit: cover;
    opacity: 0.5;
  }

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

const HeroContainerHome = styled.div`
  display: block;

  @media (min-width: 840px) {
    display: flex;
    flex-basis: calc(50%);
    align-items: center;
  }
`;

const HeroHomeText = styled.div`
  margin: 0 auto 48px;
  max-width: 80vw;
  text-align: center;

  @media (min-width: 840px) {
    margin: 0 24px;
    text-align: left;
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
  noBreadCrumbs,
  crumbsData,
  heroHome,
  navigationPosition,
  navLinksColor,
}) => (
  <>
    <Navigation
      position={navigationPosition}
      links={links.map((link) => {
        const { name, href } = link;
        return (
          <Link href={href} passHref key={href}>
            <Anchor>
              <StyledTypography color={navLinksColor} variant="subtitle2">
                {name}
              </StyledTypography>
            </Anchor>
          </Link>
        );
      })}
    />
    {heroHome
      ? (
        <HeroContainerHome>
          <HeroHomeText>
            {heroText}
            {button}
          </HeroHomeText>
          {heroImage}
        </HeroContainerHome>
      )
      : (
        <HeroContainer maxHeight={maxHeight}>
          <HeroText>
            {heroText}
            {button}
          </HeroText>
          {heroImage}
        </HeroContainer>
      )}
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
  button: PropTypes.node,
  maxHeight: PropTypes.bool,
  noPadding: PropTypes.bool,
  maxWidth: PropTypes.string,
  noBreadCrumbs: PropTypes.bool,
  crumbsData: PropTypes.arrayOf(PropTypes.shape({})),
  navigationPosition: PropTypes.string,
  navLinksColor: PropTypes.string,
};

Layout.defaultProps = {
  heroImage: null,
  children: null,
  heroText: null,
  button: null,
  maxHeight: false,
  noPadding: false,
  maxWidth: null,
  noBreadCrumbs: false,
  crumbsData: [],
  navigationPosition: 'absolute',
  navLinksColor: 'white',
};

export default Layout;
