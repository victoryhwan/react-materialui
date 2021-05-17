// import logo from './logo.svg';
import React from 'react';
// import clsx from 'clsx';

import NavBar from "./NavBar";
import SimpleCard from "./SimpleCard";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Route from "react-router-dom/Route";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar/>

        <Route exact path="/">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12 home</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </Route>
        <Route path="/detail">
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
            <Grid item xs={40} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3
                <SimpleCard></SimpleCard>
              </Paper>
            </Grid>
          </Grid>
        </Route>
    </div>
  );
}

export default App;
