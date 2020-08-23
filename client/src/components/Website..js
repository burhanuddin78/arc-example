import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import forwardArrow from '../assets/forwardArrow.svg';
import backArrow from '../assets/backArrow.svg';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';
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
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

export default function Website(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const { setSelectIndex, setValue } = props;

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
            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
              Web Development
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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

      {/* Analytics */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
        alignItems='center'
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="graph with magnifying glass revealing 1\'\s and 0\'"
                style={{ marginLeft: '-2.74em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesSM ? 'center' : undefined} variant='body1'>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      {/* Ecommerce Block */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
        justify='flex-end'
      >
        <Grid item align='center'>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt='world outline' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? '0' : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      {/* outReach */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={outreach}
                alt="graph with magnifying glass revealing 1\'\s and 0\'"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? '0' : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography align={matchesSM ? 'center' : undefined} variant='body1'>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/* Seo */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
        justify='flex-end'
      >
        <Grid item align='center'>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt='Search Engine Optimization  icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? '0' : '1em',
            marginBottom: matchesSM ? '10em' : '0',
          }}
          className={classes.paragraphContainer}
        >
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            If you’re like us, probably never.
          </Typography>
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant='body1'
            paragraph
          >
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
