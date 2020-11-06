import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  div: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 'auto',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
        <div>
            {/* <img src="home-images/home.jpg" alt="home-image"/> */}
            <div className={classes.paper}>
                IMAGEN -- WELCOME TO 5MITTEAR CLOTHING BRAND
            </div>
            <div className={classes.root}>
                <Grid container 
                spacing={3}
                direction="row"
                justify="center"
                alignItems="stretch"
                >
                    <Grid item xs={4}>
                        <div className={classes.paper}>CATEGORIES</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.paper}>FEATURED</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.paper}>USER ACCESS</div>
                    </Grid>
                </Grid>
            </div>
        </div>    
  );
}
