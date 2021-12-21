import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Button from './Button';
import Anchor from './Anchor';
import Typography from './Typography';

const Container = styled.footer`
  display: block;
  padding: 32px 16px;

  @media(min-width: 600px) {
    padding: 48px 24px;
  }
  
  @media(min-width: 1024px) {
    display: flex;
    flex-direction: row;
    box-shadow: none;
  }
`;

const FooterToolbar = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const LegalDescription = styled(Typography)`
  margin-top: 24px;
  text-align: center;
  margin-bottom: 24px;

  span {
    display: block;
    padding: 8px;
  }

  @media (min-width: 1024px) {
    display: flex;
    max-width: 840px;
    justify-content: center;
    margin: 0 auto 32px;

    span {
      margin: 0 24px;
    }
  }
`;

const FooterBanner = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
  padding: 48px 16px;
  text-align: center;

  @media (min-width: 600px) {
    padding: 72px 24px;
  }

  @media(min-width: 840px) {
    text-align: left;
  }
`;

const TextContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: ${(props) => props.theme.palette.common.white};
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Footer = ({ links }) => (
  <>
    <FooterBanner>
      <TextContainer>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid lg={8} md={8} sm={12} xs={12} item>
            <Typography variant="body1" color="white">
              YAK laat individuen en teams nieuwe inzichten
              vergaren door ze mee op avontuur te nemen buiten hun comfortzone
            </Typography>
          </Grid>
          <Grid lg={4} md={4} sm={12} xs={12} item>
            <Link
              href={{
                pathname: '/contact',
              }}
            >
              <Anchor>
                <StyledButton>Maak ook de stap</StyledButton>
              </Anchor>
            </Link>
          </Grid>
        </Grid>
      </TextContainer>
    </FooterBanner>
    <Container>
      <FooterToolbar>
        {links}
      </FooterToolbar>
    </Container>
    <LegalDescription variant="body2" tag="div">
      <span>© 2021 YAK. All right reserved.</span>
      <span>Privacy Policy</span>
    </LegalDescription>
  </>
);

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Footer.defaultProps = {
  links: null,
};

export default Footer;
