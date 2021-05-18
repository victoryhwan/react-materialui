// About.js
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SimpleCard from "../component/SimpleCard";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(1,1),
      padding: theme.spacing(1,1),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      // padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    }
  }));

const Detail = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>xs=12 sm=6 md=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>xs=12 sm=6 md=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>xs=12 sm=6 md=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>xs=12 sm=6 md=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
        </Grid>
    );
};

export default Detail;