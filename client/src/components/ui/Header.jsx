import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cx from 'classnames';
import {
  Popper,
  Paper,
  MenuList,
  ClickAwayListener,
  Grow,
} from '@material-ui/core';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '7em',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoComponent: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '35px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    background: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerEstimate: {
    backgroundColor: theme.palette.common.Orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  // useTheme
  const theme = useTheme();
  // use mediaQuery
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // useState for  MenuItems
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  // For  drawers
  const [openDrawer, setOpenDrawer] = useState(false);

  const { value, setValue, selectIndex, setSelectIndex } = props;

  const menuitems = [
    {
      name: 'Custom Software Development',
      Link: '/customsoftware',
      activeIndex: 1,
      selectIndex: 0,
    },
    {
      name: 'Mobile App Development',
      Link: '/mobileapps',
      activeIndex: 1,
      selectIndex: 1,
    },
    {
      name: 'Website Development ',
      Link: '/websites',
      activeIndex: 1,
      selectIndex: 2,
    },
  ];
  const routes = [
    { name: 'Home', Link: '/', activeIndex: 0 },
    {
      name: 'Services',
      Link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'The Revolution', Link: '/revolution', activeIndex: 2 },
    { name: 'About Us', Link: '/about', activeIndex: 3 },
    { name: 'Contact Us', Link: '/contact', activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuitems, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.Link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectIndex && route.selectIndex !== selectIndex) {
              setSelectIndex(selectIndex);
            }
          }
          break;
        case '/estimate':
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [value, menuitems, routes, selectIndex, setValue, setSelectIndex]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectIndex(i);
  };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor='primary'
      >
        {routes.map((route, index) => (
          <Tab
            key={route + index}
            className={classes.tab}
            component={Link}
            to={route.Link}
            label={route.name}
            aria-owns={route.oriaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => {
              setOpenMenu(false);
            }}
          />
        ))}
      </Tabs>
      <Button
        variant='contained'
        component={Link}
        to='/estimate'
        color='secondary'
        className={classes.button}
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        transition
        placement='bottom-start'
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'top left',
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={1}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => {
                    setOpenMenu(true);
                  }}
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id='simple-menu'
                  // onKeyDown={handleListKeyDown}
                >
                  {menuitems.map((option, i) => (
                    <MenuItem
                      key={i}
                      component={Link}
                      to={option.Link}
                      classes={{ root: classes.menuItem }}
                      onClick={(event) => {
                        handleMenuItemClick(event, i);
                        setValue(1);
                        handleClose();
                      }}
                      selected={
                        i === selectIndex &&
                        value === 1 &&
                        window.location.pathname !== '/services'
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
      ></Menu> */}
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        onClose={() => {
          setOpenDrawer(false);
        }}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.Link}
              selected={value === route.activeIndex}
            >
              <ListItemText
                disableTypography
                className={
                  value === route.activeIndex
                    ? cx(classes.drawerItemSelected, classes.drawerItem)
                    : classes.drawerItem
                }
              >
                {route.name}{' '}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            className={classes.drawerEstimate}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to='/estimate'
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? cx(classes.drawerItemSelected, classes.drawerItem)
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
          <ToolBar disableGutters>
            <Button
              component={Link}
              to='/'
              disableRipple
              className={classes.logoComponent}
              onClick={() => {
                setValue(0);
              }}
            >
              <img src={logo} className={classes.logo} alt='compaany logo ' />
            </Button>
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
