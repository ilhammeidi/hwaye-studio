import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useStyles from './action-style';
import brand from '~/public/text/brand';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={isDesktop ? 4 : 0} alignItems="center">
            <Grid item md={9} xs={12}>
              <Typography variant="h4" gutterBottom display="block">
                Join our Discord community
              </Typography>
              <Typography display="block" component="p">
                Connect with our community, meet fellow gamers, and stay up to date with the latest news and events.
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid container alignItems="center" justifyContent="center">
                <Button size="large" variant="contained" color="accent" href={brand.starter.discordLink} target="_blank" className={classes.button}>
                  JOIN DISCORD
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}

export default CallAction;
