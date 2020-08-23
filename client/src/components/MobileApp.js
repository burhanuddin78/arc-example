import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import forwardArrow from '../assets/forwardArrow.svg';
import backArrow from '../assets/backArrow.svg';
import swiss from '../assets/swissKnife.svg';
import engagement from '../assets/increaseEngagement.svg';
import acess from '../assets/extendAccess.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

export default function MobileApp(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const { setSelectIndex, setValue } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/customsoftware'
              onClick={() => setSelectIndex(1)}
            >
              <img src={backArrow} alt='Back to customsoftware page' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='row' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/websites'
              onClick={() => setSelectIndex(3)}
            >
              <img src={forwardArrow} alt='Forward to websites Page' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginBottom: '15em', marginTop: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              variant='h4'
              gutterBottom
              align={matchesMD ? 'center' : undefined}
            >
              Inetegration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          align={matchesMD ? 'center' : 'right'}
        >
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography variant='body1' paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginBottom: '15em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography variant='h4' gutterBottom align='center'>
              Extend Functionailty
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss Army Knife' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{
            marginTop: matchesMD ? '10em' : '0',
            marginBottom: matchesMD ? '10em' : '0',
          }}
        >
          <Grid item>
            <Typography variant='h4' align='center' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={acess}
              alt='acess icon'
              style={{ maxWidth: matchesSM ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography variant='h4' align='center' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt=' extend Engagement' />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
