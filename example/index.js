import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
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
