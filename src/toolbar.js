import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import About from './about';
import Portfolio from './portfolio';
import Projects from './projects';
import Body from './body';
import './css/toolbar-router.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color:'black',
    position:'fixed',
    top:0,
    },
    appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),  
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display:'block',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding: theme.spacing(0, 3),
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  large: {
    display:'inline',
    backgroundColor:'#000000',
    width: theme.spacing(1),
    height: theme.spacing(1),
  },
  iconButton: {
    display: "flex",
    flexDirection: "column"
  },
  
}));
export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
      <div className={classes.grow}>
    <Router>
      <AppBar position="static" style={{backgroundColor:'transparent'}} className={clsx(classes.appBar)}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
              Prabesh Humagain
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink to="/" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton color="inherit" classes={{ label: classes.iconButton }}>
                    <Badge  color="secondary">
                        <HomeIcon />
                    </Badge>
                </IconButton>
                <p variant="caption" >Home</p>
              </MenuItem>
            </NavLink>
            <NavLink to="/projects" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton aria-label="Projects" color="inherit">
                    <Badge>
                        <AccountTreeIcon/>
                    </Badge>
                </IconButton>
                <p>Projects</p>
              </MenuItem>
            </NavLink>
            <NavLink to="/portfolio" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton aria-label="Portfolio" color="inherit">
                  <Badge>
                    <PhotoLibraryIcon/>
                  </Badge>
                </IconButton>
                <p >Portfolio</p>
              </MenuItem>
            </NavLink>
            <NavLink to="/sdas" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton aria-label="About Me" color="inherit">
                  <Badge color="inherit">
                    <PersonPinIcon />
                  </Badge>
                </IconButton>
                <p>About Me</p>
              </MenuItem>
            </NavLink>
          </div>
          <div className={classes.sectionMobile}>
            <NavLink to="/" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton color="inherit" classes={{ label: classes.iconButton }}>
                  <Badge  color="secondary">
                    <HomeIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
            </NavLink>
            <NavLink to="/projects" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton aria-label="Projects" color="inherit">
                  <Badge>
                    <AccountTreeIcon/>
                  </Badge>
                </IconButton>
              </MenuItem>
            </NavLink>
            <NavLink to="/portfolio" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton aria-label="Portfolio" color="inherit">
                  <Badge>
                    <PhotoLibraryIcon/>
                  </Badge>
                </IconButton>
              </MenuItem>
            </NavLink>
            <NavLink to="/sdas" style={{color:'white', textDecoration:'none'}} exact activeClassName="main-nav-active">
              <MenuItem>
                <IconButton aria-label="About Me" color="inherit">
                  <Badge color="inherit">
                    <PersonPinIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    <Switch>
      <Route exact path="/">
        <Body/>
      </Route>
      <Route path="/projects">
          <Projects/>
      </Route>
      <Route path="/about">
          <About/>
      </Route>
      <Route path="/portfolio">
          <Portfolio/>
      </Route>
    </Switch>
    </Router>
        
    </div>
  );
};