import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Anchor from './Anchor';
import Typography from './Typography';
import Button from './Button';
import adventure from '../public/adventure.jpeg';

const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 24px;
`;

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Hero({
  heroText, heroDescription, navigation, heroImage, contactButton,
}) {
  return (
    <div className="mx-auto max-w-screen-2xl relative bg-white overflow-hidden">
      <div className="max-w-3xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {navigation}
          <div className="mt-10 mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <TypographyContainer>
                <StyledTypography tag="h1" variant="h3">{heroText}</StyledTypography>
                <StyledTypography tag="p" variant="body1">{heroDescription}</StyledTypography>
                {contactButton
              && (
              <Link
                href={{
                  pathname: '/contact',
                }}
              >
                <Anchor>
                  <StyledButton size="large" variant="contained">
                    Contact
                  </StyledButton>
                </Anchor>
              </Link>
              )}
              </TypographyContainer>
            </div>
          </div>
        </div>
      </div>
      {heroImage
      && (
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          alt="Mountains"
          src={heroImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={heroImage}
        />
      </div>
      )}
    </div>
  );
}

Hero.propTypes = {
  heroText: PropTypes.string,
  heroDescription: PropTypes.string,
  navigation: PropTypes.node,
  heroImage: PropTypes.string,
  contactButton: PropTypes.bool,
};

Hero.defaultProps = {
  heroText: null,
  heroDescription: null,
  navigation: null,
  heroImage: adventure,
  contactButton: false,
};
