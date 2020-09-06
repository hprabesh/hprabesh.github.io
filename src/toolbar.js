import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './about';
import Portfolio from './portfolio';
import Projects from './projects';
import Body from './body';
import './toolbar';


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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Router>

      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
      <MenuItem component={Link} to="/" >
        <IconButton color="inherit" classes={{ label: classes.iconButton }}>
        <Badge color="secondary">
          <HomeIcon />
          </Badge>
        </IconButton>
        <Typography variant="caption">HOME</Typography>
      </MenuItem>
        <MenuItem component={Link} to="/projects">
          <IconButton aria-label="Projects" >
            <Badge>
              <AccountTreeIcon/>
            </Badge>
          </IconButton>
          <p>Projects</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <IconButton aria-label="Portfolio">
            <Badge>
                <PhotoLibraryIcon/>
            </Badge>
          </IconButton>
          <p >Portfolio</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
              <IconButton aria-label="About Me">
                  <Badge >
                      <PersonPinIcon />
                  </Badge>
              </IconButton>
              <p>About Me</p>
          </MenuItem>
      </Menu>

    </Router>
  );

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
                    
                      <MenuItem component={Link} to="/">
                            <IconButton color="inherit" classes={{ label: classes.iconButton }}>
                                <Badge  color="secondary">
                                    <HomeIcon />
                                </Badge>
                            </IconButton>
                            <Typography variant="caption" >HOME</Typography>
                      </MenuItem>
                      <MenuItem component={Link} to="/projects">
                          <IconButton aria-label="Projects" color="inherit">
                              <Badge>
                                  <AccountTreeIcon/>
                              </Badge>
                          </IconButton>
                          <p>Projects</p>
                      </MenuItem>
                      <MenuItem component={Link} to="/portfolio">
                          <IconButton aria-label="Portfolio" color="inherit">
                              <Badge>
                                  <PhotoLibraryIcon/>
                              </Badge>
                          </IconButton>
                          <p >Portfolio</p>
                      </MenuItem>
                      <MenuItem component={Link} to="/">
                          <IconButton aria-label="About Me" color="inherit">
                              <Badge color="inherit">
                                  <PersonPinIcon />
                              </Badge>
                          </IconButton>
                          <p>About Me</p>
                      </MenuItem>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
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