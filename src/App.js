// eslint-disable-next-line
// import logo from './logo.svg';
import React from 'react';
// import clsx from 'clsx';

// import NavBar from "./NavBar";
import NavBar from "./common/NavBar";
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Route} from "react-router-dom";
import Home from "./view/Home";
import Detail from "./view/Detail";
import ButtonSample from "./view/ButtonSample";
import MarkDown from "./view/MarkDown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar/>
      <div className={classes.drawerHeader} />
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/button" component={ButtonSample}/>
        <Route path="/markdown" component={MarkDown}/>
    </div>
  );
}

export default App;
