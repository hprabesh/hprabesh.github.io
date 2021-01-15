import React, {useState,useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Stars from './particles';
import './css/toolbar-router.css';
import Box from '@material-ui/core/Box';

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",      
    }
  })(Typography);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 590,
      margin: `${theme.spacing(5)}px auto`,
      marginLeft:`${theme.spacing(30)}px auto`,
      padding: theme.spacing(0),
      background:'transparent',
      marginBottom:`${theme.spacing(-15)}px auto`,
      fontFamily:'mono',
      fontWeight:'600',
      color:'#bbd4ee',
      lineHeight:'70px',
      fontSize:'255%',
    },    
    normalText: {
      fontSize:'72.5%',
      fontFamily:'mono',
      paddingBottom:'1px',
      fontWeight:'300',
      lineHeight:'70px',
      color:'#f7f58f',
    },
    content: {
      fontSize:'55%',
      fontFamily:'mono',
      paddingBottom:'1px',
      fontWeight:'300',
      lineHeight:'39px',color:'#bbd4ee',
    }
  }));

 
 

export default function Home(){
    const classes=useStyles();
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      var hours = new Date().getHours(); //Current Hours
      if (hours>=12){
        setCurrentDate(
          "Good Afternoon"
        );
      } else {
        setCurrentDate("Good Morning");
      };
    }, []);
    return(
        <React.Fragment>
            <Stars/>
            <WhiteTextTypography variant="h4" className={classes.root}>
              <WhiteTextTypography variant="h6" className={classes.normalText}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(1800)
                    .deleteAll()
                    .start();
                }}
                options={{
                  strings: ['Hi!',{currentDate}.currentDate],
                  autoStart: true,
                  loop: true,
                }}
                style={{
                    padding:100,
                }}
              /> 
              </WhiteTextTypography>
              My name is Prabesh Humagain.
              <br/>
              <div style={{fontWeight:'400', opacity:'0.6',fontSize:'35px'}}>
                I build web applications.
              </div>
            </WhiteTextTypography>
            <Box id="div3" className={classes.root}>
              <WhiteTextTypography variant="h6" style={{opacity:0.6}} className={classes.content}>
                Currently, I'm a computer science student based in Arlington, Texas with a background in building (and sometimes designing) websites, web-applications, and many more.
              </WhiteTextTypography>
            </Box>
            <WhiteTextTypography variant="h5" className={classes.root}>
              
              
            
            </WhiteTextTypography>
        </React.Fragment>
    )
}