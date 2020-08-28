import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Helmet from 'react-helmet';
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: '10px 16px',
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   timeline:{
//     paddingRight:'25%',
//     paddingLeft:'15%'
//   }
// }));

export default function CustomizedTimeline() {
//   const classes = useStyles();

  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Prabesh Humagain - Photos</title>
        </Helmet>
      <Typography style={{color:'white',fontWeight:'bold',paddingTop:'25px'}} variant="h6" component="h1" align="center">
        Photos
      </Typography>
    </div>
  );
}
