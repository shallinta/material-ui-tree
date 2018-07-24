import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { blue, pink } from '@material-ui/colors';
import TreeDemo from './demo';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      light: '#ff79b0',
      main: pink.A200,
      dark: '#c60055',
      contrastText: '#fff'
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <TreeDemo />
  </MuiThemeProvider>,
  document.querySelector('#root')
);
