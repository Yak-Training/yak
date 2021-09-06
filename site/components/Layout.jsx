import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import Typography from './Typography';

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledTypography = styled(Typography)`
  padding: 0 24px;
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

const Layout = ({ children }) => (
  <>
    <Navigation
      links={links.map((link) => {
        const { name, href } = link;
        return (
          <Link href={href} passHref>
            <StyledAnchor>
              <StyledTypography variant="subtitle2">
                {name}
              </StyledTypography>
            </StyledAnchor>
          </Link>
        );
      })}
    />
    {children}
    <footer>footer</footer>
  </>
);

export default Layout;
