import React from 'react';

import { Box, createStyles, makeStyles, Paper, Theme } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(6)
    },
    main: {
      maxWidth: 1000,
      minWidth: 280,
    }
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box  className={classes.main}>
        <Paper elevation={2}>
          <Header />
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
