import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import profile from '../assets/burhan.png';

import history from '../assets/history.svg';
import CallToAction from './ui/CallToAction';

// import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  Avatar: {
    height: '18em',
    width: '18em',
    [theme.breakpoints.down('sm')]: {
      height: '13em',
      width: '13em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const { setValue } = props;

  return (
    <Grid container direction='column'>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}
      >
        <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
          About Us
        </Typography>
      </Grid>

      <Grid item container justify='center' className={classes.rowContainer}>
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
          style={{ marginTop: '3em' }}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '10em' : '5em' }}
      >
        <Grid item>
          <Grid
            item
            container
            direction='column'
            lg
            style={{ maxWidth: '35em' }}
            align={matchesMD ? 'center' : undefined}
          >
            <Grid item>
              <Typography variant='h4' gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>

              <Typography variant='body1' paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography variant='body1' paragraph>
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant='body1' paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>

              <Typography variant='body1' paragraph>
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify='center' lg>
            <img
              src={history}
              alt='book'
              width='100%'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems='center'
        direction='column'
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '10em' : '5em' }}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom align='center'>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Burhanuddin Imran
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            Mern Stack Developer
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: '5em' }}>
          <Avatar
            alt='Burhanuddin Imran'
            src={profile}
            className={classes.Avatar}
            width='100%'
          />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
