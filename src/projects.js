import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Helmet from 'react-helmet';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timeline:{
    paddingRight:'25%',
    paddingLeft:'15%'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding: theme.spacing(0, 3),
    },
  },
  sectionDesktopTitle:{
    display: 'none',
    [theme.breakpoints.up('sm')]: {
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
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prabesh Humagain - Projects</title>
      </Helmet>
      <div className={classes.sectionDesktop}>
        <Timeline align="alternate" className={classes.timeline}>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography style={{color:'white',fontWeight:'bold'}}  variant="h5" component="h1">
                eLive             
              </Typography>
              <div style={{color:'white',paddingTop:'12px'}}>
              (Summer 2020)
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>A web-project built using ReactJS, Express, and Mongoose that keeps the record of the pending and completed tasks to monitor the daily performance level which would help improve the efficiency level </Typography>
              </Paper>
              <br/>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent>
              <Typography style={{color:'white',fontWeight:'bold'}}  variant="h6" component="h1">
                Deans Engineering Challenge
              </Typography>
              <div style={{color:'white',paddingTop:'12px'}}>
              (Spring 2020)
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography align="left">A Python (TensorFlow) project that uses Artificial Neural Network Model of 3 layers to predict the amount of radiation incident in Arlington Region to analyze the feasibility of hybrid structure of solar panel and windmill as an 
                    alternative source of energy with the goal to make Arlington an smart city.<br/><br/>For our project, we received an honorable mentioning in the <strong>Deans Engineering Challenge </strong> competition.</Typography>
              </Paper>
              <br/>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent>
              <Typography style={{color:'white',fontWeight:'bold'}}  variant="h6" component="h1">
                Weather-Wiz
              </Typography>
              <div style={{color:'white',paddingTop:'12px'}}>
              (Fall 2019)
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>
                  It's a Python project built using Requests, BeautifulSoup, Matplotlib and Pandas libraries, to create the database of weather info of Arlington scrapped off the site from the past 20 years to analyze the weather change in Arlington,TX region. 
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className={classes.sectionMobile}>
      <Timeline>
      <TimelineItem>
            <TimelineOppositeContent>
              <Typography style={{color:'white',fontWeight:'bold'}}  variant="h5" component="h1">
                eLive             
              </Typography>
              <div style={{color:'white',paddingTop:'12px'}}>
              (Summer 2020)
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>A web-project built using ReactJS, Express, and Mongoose that keeps the record of the pending and completed tasks to monitor the daily performance level which would help improve the efficiency level </Typography>
              </Paper>
              <br/>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
      <Typography style={{color:'white',fontWeight:'bold'}}  variant="h6" component="h1">
                Deans Engineering Challenge
              </Typography>
              <div style={{color:'white',paddingTop:'12px'}}>
              (Spring 2020)
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography align="left">A Python (TensorFlow) project that uses Artificial Neural Network Model of 3 layers to predict the amount of radiation incident in Arlington Region to analyze the feasibility of hybrid structure of solar panel and windmill as an 
                    alternative source of energy with the goal to make Arlington an smart city.<br/><br/>For our project, we received an honorable mentioning in the <strong>Deans Engineering Challenge </strong> competition.</Typography>
              </Paper>
              <br/>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
      <Typography style={{color:'white',fontWeight:'bold'}}  variant="h6" component="h1">
                Weather-Wiz
              </Typography>
              <div style={{color:'white',paddingTop:'12px'}}>
              (Fall 2019)
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
              <RepeatIcon />

              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography>
                  It's a Python project built using Requests, BeautifulSoup, Matplotlib and Pandas libraries, to create the database of weather info of Arlington scrapped off the site from the past 20 years to analyze the weather change in Arlington,TX region. 
                </Typography>
              </Paper>
              <br/>
            </TimelineContent>
      </TimelineItem>
    </Timeline>
      </div>
    </div>
  );
}
