import React from 'react';
import Typewriter from 'typewriter-effect';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);
 
export default function Home(){
    return(
        <React.Fragment>
            <WhiteTextTypography variant="h5">
                <Typewriter
                options={{
                    strings: ['Hi There!', 'It\'s me Prabesh Humagain','Web Developer'],
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