import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import animationData from '../animations/landinganimation/data';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import MobileAppsIcons from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CallToAction';
import { Link } from 'react-router-dom';
import { Slide } from '@material-ui/core';

import VisibilitySensor from 'react-visibility-sensor';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '8%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.Orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '6em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.Orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '7em',
      paddingBottom: '7em',
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: '0.1rem',
      marginRight: '0.3rem',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  // let [active, setActive] = useState(false);

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { setValue, setSelectIndex } = props;

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/*-----Hero Block-----s*/}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  to='/estimate'
                  className={classes.estimateButton}
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
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
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      <Slide in={true} direction='right' timeout={{ enter: 500, exit: 1000 }}>
        <Grid>
          {/*-----Services Block ------*/}

          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '3em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Custom Software Development</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant='subtitle1'>
                Complete Digital Solution, from investigate to {'  '}
                <span className={classes.specialText}>Celebration</span>
              </Typography>
              <Button
                component={Link}
                to='/customsoftware'
                variant='outlined'
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectIndex(1);
                }}
              >
                <span style={{ marginRight: 8 }}> Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={customSoftwareIcon}
                alt='Custom Software Development icon'
              />
            </Grid>
          </Grid>
        </Grid>
      </Slide>

      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Slide
            direction='left'
            in={isVisible ? true : false}
            timeout={1000}
            appear
          >
            <Grid>
              {/*-----Services Block ------*/}
              <Grid
                container
                item
                direction='row'
                justify={matchesSM ? 'center' : 'flex-end'}
                className={classes.serviceContainer}
              >
                <Grid
                  item
                  style={{
                    textAlign: matchesSM ? 'center' : undefined,
                  }}
                >
                  <Typography variant='h4'>
                    iOS/Android App Development
                  </Typography>
                  <Typography variant='subtitle1' className={classes.subtitle}>
                    Extend Functionality. Extend Access. Increase Engagement.
                  </Typography>
                  <Typography variant='subtitle1'>
                    Integrate your web experience or create a standalone app
                    {matchesSM ? null : <br />}with either mobile platform.
                  </Typography>
                  <Button
                    component={Link}
                    to='/mobileapps'
                    variant='outlined'
                    className={classes.learnButton}
                    onClick={() => {
                      setValue(1);
                      setSelectIndex(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
                <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                  <img
                    className={classes.icon}
                    alt='mobile phone icon'
                    src={MobileAppsIcons}
                    width='250em'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Slide>
        )}
      </VisibilitySensor>

      <Slide in={true} direction='right' timeout={1000}>
        <Grid item>
          {/*-----Services Block ------*/}
          <Grid
            container
            direction='row'
            justify={matchesSM ? 'center' : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '3em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant='h4'>Website Development</Typography>
              <Typography variant='subtitle1' className={classes.subtitle}>
                Reach More. Discover More. Sell More
              </Typography>
              <Typography variant='subtitle1'>
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                variant='outlined'
                className={classes.learnButton}
                component={Link}
                to='/mobileapps'
                onClick={() => {
                  setValue(1);
                  setSelectIndex(3);
                }}
              >
                <span style={{ marginRight: 8 }}> Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                src={WebsiteIcon}
                alt='Custom Software Development icon'
              />
            </Grid>
          </Grid>
        </Grid>
      </Slide>
      {/* The Revolution Block */}
      <Grid item>
        <Grid
          style={{ height: '100em', marginTop: '10em' }}
          container
          justify='center'
          alignItems='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    {' '}
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' gutterBottom>
                    Visionary insights coupled with cutting edge technology is a
                    recipe for revolution
                  </Typography>
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
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* INformationBlockq */}
      <Grid item>
        <Grid
          container
          direction='row'
          style={{ height: '80em' }}
          alignItems='center'
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesSM ? 'center' : 'inherit',
            }}
            direction={matchesXs ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXs ? 0 : matchesSM ? '0em' : '3em',
                marginBottom: matchesXs ? '6rem' : 0,
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal.</Typography>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    style={{ color: 'white', borderColor: 'white' }}
                    variant='outlined'
                    component={Link}
                    to='/about'
                  >
                    <span style={{ marginRight: 8 }}> Learn More </span>
                    <ButtonArrow width={15} height={15} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sm
              style={{
                marginRight: matchesXs ? 0 : matchesSM ? '0' : '3em',
                textAlign: matchesSM ? 'center' : 'right',
                marginTop: matchesXs ? '8rem' : 0,
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>Say hello!</Typography>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    style={{ color: 'white', borderColor: 'white' }}
                    variant='outlined'
                    component={Link}
                    to='/revolution'
                    onClick={() => setValue(3)}
                  >
                    <span style={{ marginRight: 8 }}> Learn More </span>
                    <ButtonArrow width={15} height={15} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
