import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      // backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.Orange,
    height: 80,
    width: 205,
    fontSize: '1.5rem',

    borderRadius: 50,
    marginRight: '5rem',
    marginLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },

    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const { setValue } = props;

  return (
    <Grid
      container
      alignItems='center'
      justify={matchesSM ? 'space-evenly' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? '.1rem' : '3rem',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software. <br />
              Revolutionary Result
            </Typography>
            <Typography variant='subtitle2'>
              Take Advantage of 21 Century
            </Typography>
            <Grid item container justify={matchesSM ? 'center' : undefined}>
              <Button
                className={classes.learnButtonHero}
                variant='outlined'
                component={Link}
                to='/revolution'
                onClick={() => setValue(3)}
              >
                <span style={{ marginRight: 8 }}> Learn More </span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          className={classes.estimateButton}
          component={Link}
          to='/estimate'
          onClick={() => setValue(5)}
        >
          Free Esitamte
        </Button>
      </Grid>
    </Grid>
  );
}
