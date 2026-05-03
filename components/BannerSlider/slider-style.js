import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';

const sliderStyle = makeStyles({ uniqId: 'slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden'
  },
  slide: {
    position: 'relative',
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& img': {
      width: '100%'
    },
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  nav: {
    position: 'absolute',
    top: '30%',
    borderRadius: theme.rounded.small,
    width: 48,
    height: 100,
    padding: 0,
    minWidth: 0,
    zIndex: 10,
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[3],
    transform: theme.direction === 'rtl' ? 'scale(-1.6)' : 'scale(1.6)',
    '&:hover': {
      background: darken(theme.palette.primary.main, 0.2),
    },
    '& svg': {
      fill: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: 0,
  },
  next: {
    right: 0,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
