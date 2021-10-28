import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Drawer from './Drawer';
import logo from '../public/logo.svg';

const StyledToolbar = styled(Toolbar)`
  && {
    display: none;
    padding: 0;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    flex-direction: row;
    box-shadow: none;
    padding: 0 16px;

    @media (min-width: 600px) {
      padding: 0 0 0 24px;
    }
  }
`;

const Logo = styled.div`
  &&& {
    margin: 0 auto;

    @media(min-width: 1024px) {
      margin: 0;
    }
  }
`;

const Navigation = ({ links }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledAppBar position="static">
      <StyledIconButton
        onClick={handleDrawer}
        color="inherit"
      >
        <MenuIcon color="primary" />
      </StyledIconButton>
      <Logo>
        <Image
          width={100}
          height={100}
          src={logo}
          alt="Yak"
        />
      </Logo>
      <StyledToolbar>
        <Drawer open={open} onClose={handleClose}>
          {links}
        </Drawer>
        {links}
      </StyledToolbar>
    </StyledAppBar>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Navigation.defaultProps = {
  links: null,
};

export default Navigation;
