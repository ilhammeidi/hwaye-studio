import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Quote from '../Quote';
import { useTranslation } from 'next-i18next';
import brand from '~/public/text/brand';
import menu from '../Header/data/single';
import useStyles from './basic-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center">
      &copy;&nbsp;
      {brand.starter.footerText}
    </Typography>
  );
}

let counter = 0;
function createMenuData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function Basic() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        {isDesktop && <Quote />}
        {/* <nav>
          <ul>
            {menu.map((item, index) => (
              <li key={index.toString()}>
                <Link href={'#' + item} variant="subtitle1" underline="hover">
                  {t('starter-landing.header_' + item)}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </Container>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}

export default Basic;
