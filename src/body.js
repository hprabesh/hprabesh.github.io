import React from 'react';
import Typewriter from 'typewriter-effect';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from "@material-ui/core/styles";
const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
      
    }
  })(Typography);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 430,
      margin: `${theme.spacing(10)}px auto`,
      marginLeft:`${theme.spacing(30)}px auto`,
      padding: theme.spacing(0),
      background:'transparent',
      marginBottom:`${theme.spacing(-15)}px auto`
    }    
  }));
 
export default function Home(){
    const classes=useStyles();

    return(
        <React.Fragment>
            <WhiteTextTypography variant="h5" className={classes.root}>
               
                <Typewriter
                options={{
                    strings: ['Hi There!', 'This\'s Prabesh Humagain','Currently, I am updating the site','Thank you for visiting it'],
                    autoStart: true,
                    loop: true,
                }}
                style={{
                    padding:100,
                }}
                />
            </WhiteTextTypography>
        </React.Fragment>
    )
}