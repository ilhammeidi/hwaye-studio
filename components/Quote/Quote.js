import React, { Fragment, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import brand from '~/public/text/brand';
import useStyles from './quote-style';

let counter = 0;
function createMenuData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function Quote() {
  const { classes } = useStyles();

  const [socmedList] = useState([
      createMenuData('discord', brand.starter.discordLink),
      createMenuData('youtube', brand.starter.youtubeLink),
      createMenuData('tiktok', brand.starter.tiktokLink),
      createMenuData('instagram', brand.starter.instagram),
    ]);

  return (
    <Fragment>
      <div className={classes.quote}>
        <img src={brand.starter.img} alt="logo" height="100" />
        <Typography variant="h5" display="block" align="center">
          {brand.starter.notifMsg}
        </Typography>
      </div>
      <div className={classes.socmed}>
        {socmedList.map((item, index) => (
          <IconButton key={index.toString()} href={item.url} target="_blank" className={classes.icon} size="small">
            <i className={`fa-brands fa-${item.name}`} />
          </IconButton>
        ))}
      </div>
    </Fragment>
  );
}

export default Quote;
