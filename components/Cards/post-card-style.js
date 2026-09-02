import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'post_card' })((theme, _params, classes) => ({
  figure: {},
  newsCard: {
    display: 'flex',
    [`& .${classes.figure}`]: {
      margin: 0,
      overflow: 'hidden',
      borderRadius: 15,
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
  },
  properties: {
    flex: 1
  },
  media: {
    height: '100%'
  },
  action: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3, 2)
    }
  },
  desc: {
    whiteSpace: 'initial',
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    height: 'auto',
    overflow: 'hidden',
    padding: 0,
    fontSize: 16
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 1),
    }
  },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight: theme.typography.fontWeightBold
  },
  caption: {
    display: 'block',
    margin: theme.spacing(1, 0),
    color: theme.palette.text.secondary,
  },
  btn: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    fontSize: 12,
    [theme.breakpoints.up('sm')]: {
      minWidth: 200,
    }
  },
  /* Orientation */
  landscape: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    },
    flexDirection: 'row',
    [`& .${classes.figure}`]: {
      width: 300,
      marginRight: theme.spacing(1),
    },
    [`& .${classes.properties}`]: {
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > div': {
          padding: 0
        }
      },
      [`& .${classes.btn}`]: {
        [theme.breakpoints.up('sm')]: {
          margin: theme.spacing(0, 2)
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: 10
        }
      }
    },
    [`& .${classes.action}`]: {
      padding: theme.spacing(0, 1, 2)
    },
    [`& .${classes.desc}`]: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  portrait: {
    flexDirection: 'column',
    marginBottom: theme.spacing(5),
    [`& .${classes.action}`]: {
      padding: theme.spacing(0, 1, 2)
    },
    [`& .${classes.figure}`]: {
      height: 200,
    },
    [`& .${classes.btn}`]: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
  },
  /* Type */
  full: {
    overflow: 'hidden',
    position: 'relative',
    [`& .${classes.figure}`]: {
      borderRadius: 0
    }
  },
  round: {
    [`& .${classes.figure}`]: {
      margin: theme.spacing(1),
      overflow: 'hidden',
      borderRadius: theme.rounded.medium
    },
    [`&.${classes.landscape}`]: {
      '& figure': {
        [theme.breakpoints.down('sm')]: {
          margin: theme.spacing(1)
        }
      }
    }
  },
  oval: {
    overflow: 'hidden',
    [`&.${classes.portrait}`]: {
      [`& .${classes.figure}`]: {
        width: '120%',
        marginLeft: '-10%',
        overflow: 'hidden',
        borderRadius: '0 0 50% 50%',
      }
    },
    [`&.${classes.landscape}`]: {
      [`& .${classes.figure}`]: {
        overflow: 'hidden',
      },
      [`& .${classes.media}`]: {
        borderRadius: '0 50% 50% 0 !important',
        height: '120% !important',
        marginTop: '-10%',
      },
    }
  },
  over: {
    overflow: 'visible',
    [`& .${classes.figure}`]: {
      boxShadow: theme.shadows[8],
    },
    [`&.${classes.portrait}`]: {
      [`& .${classes.figure}`]: {
        margin: theme.spacing(-2, 2, 0),
        [theme.breakpoints.down('sm')]: {
          height: 180
        },
        '& img': {
          width: '100%'
        }
      }
    },
    [`&.${classes.landscape}`]: {
      [`& .${classes.figure}`]: {
        width: 150,
        height: 150,
        margin: 0,
        marginLeft: theme.spacing(-2),
        [theme.breakpoints.down('sm')]: {
          width: '93%',
          margin: '0 auto',
          height: 180
        },
        '& img': {
          height: '100%',
          minWidth: '100%',
          [theme.breakpoints.down('sm')]: {
            height: 'auto',
            width: '100%'
          }
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
