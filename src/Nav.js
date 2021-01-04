import React, { useState } from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";


import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

import {darkTheme ,lightTheme} from '../src/theme';


import Image from 'next/image'

import Link from '../src/Link';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
 root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }, 
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(0.1),
    marginBottom: theme.spacing(0.1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(5),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
 
const [theme, setTheme] = useState(true)

const themeIcon = !theme ? <Brightness7Icon /> : <Brightness3Icon /> 
// Icons imported from `@material-ui/icons`

const appliedTheme = createMuiTheme(theme ? darkTheme : lightTheme)
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
    <CssBaseline />
    <ThemeProvider theme={appliedTheme}>
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
              
          <Typography variant="h5" noWrap className={classes.title}>
            נדל"ניסט
          </Typography>
          <Button id ="sign_in" color="inherit" component={Link} naked href="/signup">הרשם</Button>
          <Button id ="sign_up"  color="inherit" component={Link} naked href="/login">התחבר</Button>
          <Button>
            <Avatar edge="end"  alt="נדליסט לוגו" className={classes.large} variant="rounded" >
                <Image layout='fill' src="/../static/images/smalllogo.png"/>
            </Avatar>
          </Button>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setTheme(!theme)}
          >
            {themeIcon}
          </IconButton>
        <Divider />
        <List>
          {[{text: 'עסקאות נדל"ן', url:'deal'},{text: 'אומנות ואדריכלות', url:'art'},{text: 'תרבות בעיר', url:'culture'},{text: 'טיולים וטבע ', url:'nature'},{text: 'נדל"ן לוהט', url:'hot'}].map((item, index) => (
            <ListItem button key={item.text} component={Link} naked href={item.url}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </ThemeProvider>
    </div>
  );
}




