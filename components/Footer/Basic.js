import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
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

  const [socmedList] = useState([
    createMenuData('discord', brand.starter.discordLink),
    createMenuData('youtube', brand.starter.youtubeLink),
    createMenuData('tiktok', brand.starter.tiktokLink),
    createMenuData('instagram', brand.starter.instagram),
  ]);

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.quote}>
          <img src={brand.starter.img} alt="logo" height="100" />
          <Typography variant="h5" display="block" align="center">
            {brand.starter.notifMsg}
          </Typography>
        </div>
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
        <div className={classes.socmed}>
          {socmedList.map((item, index) => (
            <IconButton key={index.toString()} href={item.url} target="_blank" className={classes.icon} size="small">
              <i className={`fa-brands fa-${item.name}`} />
            </IconButton>
          ))}
        </div>
      </Container>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}

export default Basic;
