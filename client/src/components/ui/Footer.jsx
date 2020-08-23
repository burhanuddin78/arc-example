import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adorment: {
    width: '19em',
    verticalAlign: 'bottom',

    [theme.breakpoints.down('md')]: {
      width: '14em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '9em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '2.5em',
  },
  icon: {
    height: '3em',
    width: '3em',

    [theme.breakpoints.down('xs')]: {
      height: '1.3em',
      width: '1.3em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-5em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.5em',
      marginTop: '-4em',
    },
  },
}));
export default function Footer(props) {
  const classes = useStyles();

  const { setValue, setSelectIndex } = props;

  useEffect(() => {}, [setValue, setSelectIndex]);

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/'
                className={classes.link}
                onClick={() => {
                  setValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/services'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to='/customsoftware'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectIndex(1);
                }}
              >
                customsoftware
              </Grid>
              <Grid
                item
                component={Link}
                to='/mobileapps'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectIndex(2);
                }}
              >
                mobile Application
              </Grid>
              <Grid
                item
                component={Link}
                to='/websites'
                className={classes.link}
                onClick={() => {
                  setValue(1);
                  setSelectIndex(3);
                }}
              >
                Web Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/revolution'
                className={classes.link}
                onClick={() => {
                  setValue(2);
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => {
                  setValue(3);
                }}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => {
                  setValue(3);
                }}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to='/about'
                className={classes.link}
                onClick={() => {
                  setValue(3);
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                to='/contact'
                className={classes.link}
                onClick={() => {
                  setValue(4);
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt='Footer Adornment'
        src={footerAdorment}
        className={classes.adorment}
      />
      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href='http://www.facebook.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={facebook} alt='facebook logo' className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.twitter.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={twitter} alt='twitter logo' className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.instagram.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={instagram} alt='instagram logo' className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
