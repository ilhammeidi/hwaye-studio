import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Logo from '../Branding/Logo';
import link from '~/public/text/link';
import MobileMenu from './SideNav/SingleNavMobile';
import HeaderMenu from './TopNav/LinkNav';
import useStyles from './header-style';
import navMenu from './data/single';
import samplePages from './data/sample-pages';
import brand from '~/public/text/brand';

let counter = 0;
function createMenuData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function createSocmedData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function NavLink(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir, home } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [menuList] = useState([
    createMenuData('Games', navMenu[0]),
    createMenuData('News', 'about/team'),
    createMenuData('Studio', navMenu[2]),
    createMenuData('Career', navMenu[3]),
    createMenuData('Contact', navMenu[4]),
  ]);
  const [socmedList] = useState([
    createMenuData('discord', brand.starter.discordLink),
    createMenuData('youtube', brand.starter.youtubeLink),
    createMenuData('tiktok', brand.starter.tiktokLink),
    createMenuData('instagram', brand.starter.instagram),
  ]);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  
  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        position="relative"
        id="header"
        className={cx(
          classes.header,
          openMenu && classes.noShadow,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              {/* { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                  size="large"
                >
                  <span className="hamburger-box">
                    <span className={cx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )} */}
              <div className={classes.logo}>
                <a href={link.starter.home}>
                  <Logo type="only" />
                </a>
              </div>
              {isDesktop && (
                <div className={classes.mainMenu}>
                  {/* <HeaderMenu
                    menuPrimary={menuList}
                    singleNav={home}
                  /> */}
                  <div className={classes.socmed}>
                    {socmedList.map((item, index) => (
                      <IconButton key={index.toString()} href={item.url} target="_blank">
                        <i className={`fa-brands fa-${item.name}`} />
                      </IconButton>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

NavLink.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  home: PropTypes.bool
};

NavLink.defaultProps = {
  home: false
};

export default NavLink;
