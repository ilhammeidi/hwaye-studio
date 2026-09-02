import { makeStyles } from 'tss-react/mui';

const quoteStyles = makeStyles({ uniqId: 'basic' })(theme => ({
  quote: {
    margin: theme.spacing(4, 1),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10)
    },
    '& img': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }
  },
  socmed: {
    display: 'flex',
    width: 200,
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  icon: {
    padding: theme.spacing(),
    background: 'none',
    '&:hover': {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light
    },
    '& i': {
      width: 25,
      height: 25,
      fontSize: 22,
    }
  },
}));

export default quoteStyles;
