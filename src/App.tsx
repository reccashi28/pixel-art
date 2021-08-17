import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Box, createStyles, makeStyles, Paper, Theme } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DrawingPanel from './components/DrawingPanel/DrawingPanel';
import Home from './components/Home/Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(6)
    },
    body: {
      width: '70%',
      minWidth: 280,
    },
    main: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      
    }
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box  className={classes.body}>
        <Paper elevation={2}>
          <BrowserRouter>
            <Header />
            <Box className={classes.main}>
              <Switch>
                <Route exact path='/'>
                  <Home />
                  <DrawingPanel />

                </Route>
                <Route exact path='/drawingpanel'>
                  <DrawingPanel />
                </Route>
              </Switch>
            </Box>
          </BrowserRouter>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
