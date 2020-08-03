

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    align:'right',
    'margin-left': 'auto',
    margin: `${theme.spacing(5)}px auto`,
    background:'gray',
    color:'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  text:{
    color:'white',
    fontWeight:600
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="update" className={classes.avatar}>
            PH
          </Avatar>
        }
        className={classes.text}
        title="UPDATES"
        subheader={<Typography variant="body2" color="textSecondary" component="p" className={classes.text}>August 2, 2020</Typography>}
      />
      <CardMedia
        className={classes.media}
        image="/images/update.png"
        title="Site Update"
        // color="white"
      />

        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          The site is currently inactive. All the internal links have been disabled. 
        </Typography>
      </CardContent>
    </Card>
  );
}
