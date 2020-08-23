import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';
import mobileBackground from '../assets/mobileBackground.jpg';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    margin: 'auto',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },

  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.Orange,
    height: 80,
    width: 200,
    fontSize: '1.5rem',
    borderRadius: 50,
    marginLeft: '15rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
      fontSize: '1.4rem',
    },

    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 8,
  },
  sendButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.Orange,
    height: 45,
    width: 260,
    fontSize: '1rem',

    borderRadius: 50,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },

    [theme.breakpoints.down('xs')]: {
      width: 170,
      fontSize: '.9rem',
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid Email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper('Invalid Email');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .post('/api/mail/', {
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then((res) => {
        setLoading(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: 'true',
          message: 'Message Sent Successfully!',
          backgroundColor: '#4bb542',
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: 'true',
          message: 'Something went wrong, Please try again!',
          backgroundColor: '#ff3232',
        });
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt='paper airplane' style={{ marginLeft: '1em' }} />
    </React.Fragment>
  );

  const { setValue } = props;
  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        justify='center'
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                variant='h2'
                align={matchesMD ? 'center' : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>

              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>

            <Grid item container style={{ marginTop: '2rem' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone icon'
                  style={{ marginRight: '.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  {' '}
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2rem' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt='email icon'
                  style={{ marginRight: '.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href='mailto:burhanuddin5023@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {' '}
                    burhanuddin5023@gmail.com{' '}
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container direction='column' style={{ Width: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Name'
                  id='name'
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Email'
                  id='email'
                  fullWidth
                  value={email}
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Phone'
                  id='phone'
                  value={phone}
                  fullWidth
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                value={message}
                multiline
                placeholder='Tell us more about your project'
                fullWidth
                rows={10}
                id='message'
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button
                variant='contained'
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: '1302' }}
        open={open}
        fullScreen={matchesXs}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXs ? '1em' : '5em',
            paddingBottom: matchesXs ? '1em' : '5em',
            paddingLeft: matchesXs
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '15em'
              : '25em',
            paddingRight: matchesXs
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '15em'
              : '25em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom align='center'>
                Confirm message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                id='email'
                fullWidth
                value={email}
                onChange={onChange}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Phone'
                id='phone'
                value={phone}
                fullWidth
                onChange={onChange}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
              />
            </Grid>

            <Grid item style={{ Width: matchesSM ? '100%' : '20em' }}>
              <TextField
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                value={message}
                multiline
                fullWidth
                rows={10}
                id='message'
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>

            <Grid
              item
              container
              direction='row'
              style={{ marginTop: '2rem' }}
              justify='center'
              alignItems='center'
            >
              <Grid item>
                <Button
                  color='primary'
                  onClick={() => setOpen(false)}
                  style={{ fontWeight: 300 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  className={classes.sendButton}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  onClick={onConfirm}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Snackbar */}

      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={alert.message}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
      <Grid
        item
        container
        alignItems='center'
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        lg={8}
        xl={9}
        justify='space-evenly'
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? '.1rem' : '3rem',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction='column'>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
                Simple Software. <br />
                Revolutionary Result
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='subtitle2'
              >
                Take Advantage of 21 Century
              </Typography>
              <Grid item container justify={matchesMD ? 'center' : undefined}>
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
    </Grid>
  );
}
