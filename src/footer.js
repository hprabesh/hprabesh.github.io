import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Time from 'react-time';

var now = new Date();
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 5600,
    margin: `${theme.spacing(25)}px auto`,
    marginLeft:`${theme.spacing(30)}px auto`,
  },
  appBar:{
        top: 'auto',
      bottom:0,
      background:'transparent'
  },
  toolbar: {
    minHeight: 40,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    justifyContentL:'center'
  },
  title: {
    flexGrow: 1,
    alignSelf: 'left',
    fontSize:'18px'
    
  },
  icon: {
    fontSize: '20px !important',
    marginBottom: theme.spacing.unit,
    paddingRight:'5px'
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="p" noWrap>
            © <Time value={now} format="YYYY" /> - Prabesh Humagain
          </Typography>
          <Button aria-label="GitHub" color="inherit" href="https://github.com/hprabesh/h-prabesh" target="_blank"  variant="p"><GitHubIcon className={classes.icon} /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}